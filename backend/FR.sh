srt-live-transmit "srt://srt.delmastech.tk:2944?mode=caller&latency=2000&streamid=output/live/program" \
file://con/ | ffplay -fs -hide_banner -framedrop -fflags nobuffer -