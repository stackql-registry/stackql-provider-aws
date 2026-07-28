"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["479152"],{443847(e,a,r){r.r(a),r.d(a,{metadata:()=>t,default:()=>x,frontMatter:()=>u,contentTitle:()=>c,toc:()=>h,assets:()=>p});var t=JSON.parse('{"id":"services/timestream_influxdb/db_parameter_groups/index","title":"db_parameter_groups","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/timestream_influxdb/db_parameter_groups/index.md","sourceDirName":"services/timestream_influxdb/db_parameter_groups","slug":"/services/timestream_influxdb/db_parameter_groups/","permalink":"/services/timestream_influxdb/db_parameter_groups/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"db_parameter_groups","hide_title":false,"hide_table_of_contents":false,"keywords":["db_parameter_groups","timestream_influxdb","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"db_instances_for_clusters","permalink":"/services/timestream_influxdb/db_instances_for_clusters/"},"next":{"title":"tags","permalink":"/services/timestream_influxdb/tags/"}}'),i=r(474848),n=r(28453),s=r(97362),d=r(897272),o=r(413554),l=r(541647);let u={title:"db_parameter_groups",hide_title:!1,hide_table_of_contents:!1,keywords:["db_parameter_groups","timestream_influxdb","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},c,p={},h=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2}];function m(e){let a={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["Creates, updates, deletes, gets or lists a ",(0,i.jsx)("code",{children:"db_parameter_groups"})," resource."]}),"\n",(0,i.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"db_parameter_groups"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"aws.timestream_influxdb.db_parameter_groups"})})]})]})}),"\n",(0,i.jsx)(a.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(a.p,{children:["The following fields are returned by ",(0,i.jsx)(a.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsxs)(o.A,{defaultValue:"get_db_parameter_group",values:[{label:"get_db_parameter_group",value:"get_db_parameter_group"},{label:"list_db_parameter_groups",value:"list_db_parameter_groups"}],children:[(0,i.jsx)(l.A,{value:"get_db_parameter_group",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"id"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A service-generated unique identifier. (pattern: <code>[a-zA-Z0-9]+</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"name"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands. (pattern: <code>[a-zA-Z][a-zA-Z0-9]",(0,i.jsx)(a.em,{children:"(-[a-zA-Z0-9]+)"}),"</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"arn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the DB parameter group. (pattern: <code>arn",":aws","[a-z-]*",":timestream","-influxdb:[a-z0-9-]+:[0-9]{12}:(db-instance|db-cluster|db-parameter-group)/[a-zA-Z0-9]{3,64}</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"description"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A description of the DB parameter group."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"parameters"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The parameters that comprise the DB parameter group."})]})]})]})}),(0,i.jsx)(l.A,{value:"list_db_parameter_groups",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"id"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A service-generated unique identifier. (pattern: <code>[a-zA-Z0-9]+</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"name"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["This customer-supplied name uniquely identifies the parameter group. (pattern: <code>[a-zA-Z][a-zA-Z0-9]",(0,i.jsx)(a.em,{children:"(-[a-zA-Z0-9]+)"}),"</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"arn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the DB parameter group. (pattern: <code>arn",":aws","[a-z-]*",":timestream","-influxdb:[a-z0-9-]+:[0-9]{12}:(db-instance|db-cluster|db-parameter-group)/[a-zA-Z0-9]{3,64}</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"description"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A description of the DB parameter group."})]})]})]})})]}),"\n",(0,i.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(a.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#get_db_parameter_group",children:(0,i.jsx)(s.A,{code:"get_db_parameter_group"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Returns a Timestream for InfluxDB DB parameter group."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#list_db_parameter_groups",children:(0,i.jsx)(s.A,{code:"list_db_parameter_groups"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Returns a list of Timestream for InfluxDB DB parameter groups."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_db_parameter_group",children:(0,i.jsx)(s.A,{code:"create_db_parameter_group"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-name",children:(0,i.jsx)("code",{children:"name"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Creates a new Timestream for InfluxDB DB parameter group to associate with DB instances."})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(a.p,{children:["Parameters can be passed in the ",(0,i.jsx)(a.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(a.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,i.jsxs)(a.h2,{id:"select-examples",children:[(0,i.jsx)(a.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsxs)(o.A,{defaultValue:"get_db_parameter_group",values:[{label:"get_db_parameter_group",value:"get_db_parameter_group"},{label:"list_db_parameter_groups",value:"list_db_parameter_groups"}],children:[(0,i.jsxs)(l.A,{value:"get_db_parameter_group",children:[(0,i.jsx)(a.p,{children:"Returns a Timestream for InfluxDB DB parameter group."}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-sql",children:"SELECT\nid,\nname,\narn,\ndescription,\nparameters\nFROM aws.timestream_influxdb.db_parameter_groups\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,i.jsxs)(l.A,{value:"list_db_parameter_groups",children:[(0,i.jsx)(a.p,{children:"Returns a list of Timestream for InfluxDB DB parameter groups."}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-sql",children:"SELECT\nid,\nname,\narn,\ndescription\nFROM aws.timestream_influxdb.db_parameter_groups\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,i.jsxs)(a.h2,{id:"insert-examples",children:[(0,i.jsx)(a.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(o.A,{defaultValue:"create_db_parameter_group",values:[{label:"create_db_parameter_group",value:"create_db_parameter_group"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(l.A,{value:"create_db_parameter_group",children:[(0,i.jsx)(a.p,{children:"Creates a new Timestream for InfluxDB DB parameter group to associate with DB instances."}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-sql",children:"INSERT INTO aws.timestream_influxdb.db_parameter_groups (\nname,\ndescription,\nparameters,\ntags,\nregion\n)\nSELECT \n'{{ name }}' /* required */,\n'{{ description }}',\n'{{ parameters }}',\n'{{ tags }}',\n'{{ region }}'\nRETURNING\nid,\nname,\narn,\ndescription,\nparameters\n;\n"})})]}),(0,i.jsx)(l.A,{value:"manifest",children:(0,i.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: db_parameter_groups
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the db_parameter_groups resource.
  - name: name
    value: "{{ name }}"
    description: |
      The name of the DB parameter group. The name must be unique per customer and per region.
  - name: description
    value: "{{ description }}"
    description: |
      A description of the DB parameter group.
  - name: parameters
    description: |
      A list of the parameters that comprise the DB parameter group.
    value:
      InfluxDBv2:
        fluxLogEnabled: {{ fluxLogEnabled }}
        logLevel: "{{ logLevel }}"
        noTasks: {{ noTasks }}
        queryConcurrency: {{ queryConcurrency }}
        queryQueueSize: {{ queryQueueSize }}
        tracingType: "{{ tracingType }}"
        metricsDisabled: {{ metricsDisabled }}
        httpIdleTimeout:
          durationType: "{{ durationType }}"
          value: {{ value }}
        httpReadHeaderTimeout:
          durationType: "{{ durationType }}"
          value: {{ value }}
        httpReadTimeout:
          durationType: "{{ durationType }}"
          value: {{ value }}
        httpWriteTimeout:
          durationType: "{{ durationType }}"
          value: {{ value }}
        influxqlMaxSelectBuckets: {{ influxqlMaxSelectBuckets }}
        influxqlMaxSelectPoint: {{ influxqlMaxSelectPoint }}
        influxqlMaxSelectSeries: {{ influxqlMaxSelectSeries }}
        pprofDisabled: {{ pprofDisabled }}
        queryInitialMemoryBytes: {{ queryInitialMemoryBytes }}
        queryMaxMemoryBytes: {{ queryMaxMemoryBytes }}
        queryMemoryBytes: {{ queryMemoryBytes }}
        sessionLength: {{ sessionLength }}
        sessionRenewDisabled: {{ sessionRenewDisabled }}
        storageCacheMaxMemorySize: {{ storageCacheMaxMemorySize }}
        storageCacheSnapshotMemorySize: {{ storageCacheSnapshotMemorySize }}
        storageCacheSnapshotWriteColdDuration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        storageCompactFullWriteColdDuration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        storageCompactThroughputBurst: {{ storageCompactThroughputBurst }}
        storageMaxConcurrentCompactions: {{ storageMaxConcurrentCompactions }}
        storageMaxIndexLogFileSize: {{ storageMaxIndexLogFileSize }}
        storageNoValidateFieldSize: {{ storageNoValidateFieldSize }}
        storageRetentionCheckInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        storageSeriesFileMaxConcurrentSnapshotCompactions: {{ storageSeriesFileMaxConcurrentSnapshotCompactions }}
        storageSeriesIdSetCacheSize: {{ storageSeriesIdSetCacheSize }}
        storageWalMaxConcurrentWrites: {{ storageWalMaxConcurrentWrites }}
        storageWalMaxWriteDelay:
          durationType: "{{ durationType }}"
          value: {{ value }}
        uiDisabled: {{ uiDisabled }}
      InfluxDBv3Core:
        queryFileLimit: {{ queryFileLimit }}
        queryLogSize: {{ queryLogSize }}
        logFilter: "{{ logFilter }}"
        logFormat: "{{ logFormat }}"
        dataFusionNumThreads: {{ dataFusionNumThreads }}
        dataFusionRuntimeType: "{{ dataFusionRuntimeType }}"
        dataFusionRuntimeDisableLifoSlot: {{ dataFusionRuntimeDisableLifoSlot }}
        dataFusionRuntimeEventInterval: {{ dataFusionRuntimeEventInterval }}
        dataFusionRuntimeGlobalQueueInterval: {{ dataFusionRuntimeGlobalQueueInterval }}
        dataFusionRuntimeMaxBlockingThreads: {{ dataFusionRuntimeMaxBlockingThreads }}
        dataFusionRuntimeMaxIoEventsPerTick: {{ dataFusionRuntimeMaxIoEventsPerTick }}
        dataFusionRuntimeThreadKeepAlive:
          durationType: "{{ durationType }}"
          value: {{ value }}
        dataFusionRuntimeThreadPriority: {{ dataFusionRuntimeThreadPriority }}
        dataFusionMaxParquetFanout: {{ dataFusionMaxParquetFanout }}
        dataFusionUseCachedParquetLoader: {{ dataFusionUseCachedParquetLoader }}
        dataFusionConfig: "{{ dataFusionConfig }}"
        maxHttpRequestSize: {{ maxHttpRequestSize }}
        forceSnapshotMemThreshold:
          percent: "{{ percent }}"
          absolute: {{ absolute }}
        walSnapshotSize: {{ walSnapshotSize }}
        walMaxWriteBufferSize: {{ walMaxWriteBufferSize }}
        snapshottedWalFilesToKeep: {{ snapshottedWalFilesToKeep }}
        preemptiveCacheAge:
          durationType: "{{ durationType }}"
          value: {{ value }}
        parquetMemCachePrunePercentage: {{ parquetMemCachePrunePercentage }}
        parquetMemCachePruneInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        disableParquetMemCache: {{ disableParquetMemCache }}
        parquetMemCacheQueryPathDuration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        lastCacheEvictionInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        distinctCacheEvictionInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        gen1Duration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        execMemPoolBytes:
          percent: "{{ percent }}"
          absolute: {{ absolute }}
        parquetMemCacheSize:
          percent: "{{ percent }}"
          absolute: {{ absolute }}
        walReplayFailOnError: {{ walReplayFailOnError }}
        walReplayConcurrencyLimit: {{ walReplayConcurrencyLimit }}
        tableIndexCacheMaxEntries: {{ tableIndexCacheMaxEntries }}
        tableIndexCacheConcurrencyLimit: {{ tableIndexCacheConcurrencyLimit }}
        gen1LookbackDuration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        retentionCheckInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        deleteGracePeriod:
          durationType: "{{ durationType }}"
          value: {{ value }}
        hardDeleteDefaultDuration:
          durationType: "{{ durationType }}"
          value: {{ value }}
      InfluxDBv3Enterprise:
        queryFileLimit: {{ queryFileLimit }}
        queryLogSize: {{ queryLogSize }}
        logFilter: "{{ logFilter }}"
        logFormat: "{{ logFormat }}"
        dataFusionNumThreads: {{ dataFusionNumThreads }}
        dataFusionRuntimeType: "{{ dataFusionRuntimeType }}"
        dataFusionRuntimeDisableLifoSlot: {{ dataFusionRuntimeDisableLifoSlot }}
        dataFusionRuntimeEventInterval: {{ dataFusionRuntimeEventInterval }}
        dataFusionRuntimeGlobalQueueInterval: {{ dataFusionRuntimeGlobalQueueInterval }}
        dataFusionRuntimeMaxBlockingThreads: {{ dataFusionRuntimeMaxBlockingThreads }}
        dataFusionRuntimeMaxIoEventsPerTick: {{ dataFusionRuntimeMaxIoEventsPerTick }}
        dataFusionRuntimeThreadKeepAlive:
          durationType: "{{ durationType }}"
          value: {{ value }}
        dataFusionRuntimeThreadPriority: {{ dataFusionRuntimeThreadPriority }}
        dataFusionMaxParquetFanout: {{ dataFusionMaxParquetFanout }}
        dataFusionUseCachedParquetLoader: {{ dataFusionUseCachedParquetLoader }}
        dataFusionConfig: "{{ dataFusionConfig }}"
        maxHttpRequestSize: {{ maxHttpRequestSize }}
        forceSnapshotMemThreshold:
          percent: "{{ percent }}"
          absolute: {{ absolute }}
        walSnapshotSize: {{ walSnapshotSize }}
        walMaxWriteBufferSize: {{ walMaxWriteBufferSize }}
        snapshottedWalFilesToKeep: {{ snapshottedWalFilesToKeep }}
        preemptiveCacheAge:
          durationType: "{{ durationType }}"
          value: {{ value }}
        parquetMemCachePrunePercentage: {{ parquetMemCachePrunePercentage }}
        parquetMemCachePruneInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        disableParquetMemCache: {{ disableParquetMemCache }}
        parquetMemCacheQueryPathDuration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        lastCacheEvictionInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        distinctCacheEvictionInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        gen1Duration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        execMemPoolBytes:
          percent: "{{ percent }}"
          absolute: {{ absolute }}
        parquetMemCacheSize:
          percent: "{{ percent }}"
          absolute: {{ absolute }}
        walReplayFailOnError: {{ walReplayFailOnError }}
        walReplayConcurrencyLimit: {{ walReplayConcurrencyLimit }}
        tableIndexCacheMaxEntries: {{ tableIndexCacheMaxEntries }}
        tableIndexCacheConcurrencyLimit: {{ tableIndexCacheConcurrencyLimit }}
        gen1LookbackDuration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        retentionCheckInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        deleteGracePeriod:
          durationType: "{{ durationType }}"
          value: {{ value }}
        hardDeleteDefaultDuration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        ingestQueryInstances: {{ ingestQueryInstances }}
        queryOnlyInstances: {{ queryOnlyInstances }}
        dedicatedCompactor: {{ dedicatedCompactor }}
        compactionRowLimit: {{ compactionRowLimit }}
        compactionMaxNumFilesPerPlan: {{ compactionMaxNumFilesPerPlan }}
        compactionGen2Duration:
          durationType: "{{ durationType }}"
          value: {{ value }}
        compactionMultipliers: "{{ compactionMultipliers }}"
        compactionCleanupWait:
          durationType: "{{ durationType }}"
          value: {{ value }}
        compactionCheckInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        lastValueCacheDisableFromHistory: {{ lastValueCacheDisableFromHistory }}
        distinctValueCacheDisableFromHistory: {{ distinctValueCacheDisableFromHistory }}
        replicationInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
        catalogSyncInterval:
          durationType: "{{ durationType }}"
          value: {{ value }}
  - name: tags
    value: "{{ tags }}"
    description: |
      A list of key-value pairs to associate with the DB parameter group.
`})})]})]})}function x(e={}){let{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);