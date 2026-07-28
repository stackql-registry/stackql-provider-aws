"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["956718"],{403281(e,r,s){s.r(r),s.d(r,{metadata:()=>t,default:()=>p,frontMatter:()=>o,contentTitle:()=>h,toc:()=>x,assets:()=>u});var t=JSON.parse('{"id":"services/kafka/cluster_v2s/index","title":"cluster_v2s","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/kafka/cluster_v2s/index.md","sourceDirName":"services/kafka/cluster_v2s","slug":"/services/kafka/cluster_v2s/","permalink":"/services/kafka/cluster_v2s/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"cluster_v2s","hide_title":false,"hide_table_of_contents":false,"keywords":["cluster_v2s","kafka","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"cluster_policies","permalink":"/services/kafka/cluster_policies/"},"next":{"title":"clusters","permalink":"/services/kafka/clusters/"}}'),n=s(474848),i=s(28453),l=s(97362),d=s(897272),c=s(413554),a=s(541647);let o={title:"cluster_v2s",hide_title:!1,hide_table_of_contents:!1,keywords:["cluster_v2s","kafka","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2}];function j(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"cluster_v2s"})," resource."]}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"cluster_v2s"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"aws.kafka.cluster_v2s"})})]})]})}),"\n",(0,n.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.p,{children:["The following fields are returned by ",(0,n.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"describe_cluster_v2",values:[{label:"describe_cluster_v2",value:"describe_cluster_v2"}],children:(0,n.jsx)(a.A,{value:"describe_cluster_v2",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"ActiveOperationArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Resource Name (ARN) that uniquely identifies a cluster operation."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"ClusterArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Resource Name (ARN) that uniquely identifies the cluster."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"ClusterName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the cluster."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"ClusterType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Cluster Type. (PROVISIONED, SERVERLESS)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"CreationTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The time when the cluster was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"CurrentVersion"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The current version of the MSK cluster."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"Provisioned"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Information about the provisioned cluster."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"Serverless"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Information about the serverless cluster."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"State"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING. (ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, UPDATING)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"StateInfo"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"State Info for the Amazon MSK cluster."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"Tags"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Tags attached to the cluster."})]})]})]})})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_cluster_v2",children:(0,n.jsx)(l.A,{code:"describe_cluster_v2"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-cluster_arn",children:(0,n.jsx)("code",{children:"cluster_arn"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_cluster_v2",children:(0,n.jsx)(l.A,{code:"create_cluster_v2"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-ClusterName",children:(0,n.jsx)("code",{children:"ClusterName"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a new MSK cluster."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,n.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{id:"parameter-cluster_arn",children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"cluster_arn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Resource Name (ARN) that uniquely identifies the cluster."})]}),(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"select-examples",children:[(0,n.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"describe_cluster_v2",values:[{label:"describe_cluster_v2",value:"describe_cluster_v2"}],children:(0,n.jsxs)(a.A,{value:"describe_cluster_v2",children:[(0,n.jsx)(r.p,{children:"Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\nActiveOperationArn,\nClusterArn,\nClusterName,\nClusterType,\nCreationTime,\nCurrentVersion,\nProvisioned,\nServerless,\nState,\nStateInfo,\nTags\nFROM aws.kafka.cluster_v2s\nWHERE cluster_arn = '{{ cluster_arn }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,n.jsxs)(r.h2,{id:"insert-examples",children:[(0,n.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(c.A,{defaultValue:"create_cluster_v2",values:[{label:"create_cluster_v2",value:"create_cluster_v2"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(a.A,{value:"create_cluster_v2",children:[(0,n.jsx)(r.p,{children:"Creates a new MSK cluster."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.kafka.cluster_v2s (\nClusterName,\nTags,\nProvisioned,\nServerless,\nregion\n)\nSELECT \n'{{ ClusterName }}' /* required */,\n'{{ Tags }}',\n'{{ Provisioned }}',\n'{{ Serverless }}',\n'{{ region }}'\nRETURNING\nClusterArn,\nClusterName,\nClusterType,\nState\n;\n"})})]}),(0,n.jsx)(a.A,{value:"manifest",children:(0,n.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: cluster_v2s
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the cluster_v2s resource.
  - name: ClusterName
    value: "{{ ClusterName }}"
  - name: Tags
    value: "{{ Tags }}"
  - name: Provisioned
    description: |
      Provisioned cluster request.
    value:
      BrokerNodeGroupInfo:
        BrokerAZDistribution: "{{ BrokerAZDistribution }}"
        ClientSubnets:
          - "{{ ClientSubnets }}"
        InstanceType: "{{ InstanceType }}"
        SecurityGroups:
          - "{{ SecurityGroups }}"
        StorageInfo:
          EbsStorageInfo:
            ProvisionedThroughput:
              Enabled: {{ Enabled }}
              VolumeThroughput: {{ VolumeThroughput }}
            VolumeSize: {{ VolumeSize }}
        ConnectivityInfo:
          PublicAccess:
            Type: "{{ Type }}"
          VpcConnectivity:
            ClientAuthentication:
              Sasl: "{{ Sasl }}"
              Tls: "{{ Tls }}"
          NetworkType: "{{ NetworkType }}"
        ZoneIds:
          - "{{ ZoneIds }}"
      Rebalancing:
        Status: "{{ Status }}"
      ClientAuthentication:
        Sasl:
          Scram:
            Enabled: {{ Enabled }}
          Iam:
            Enabled: {{ Enabled }}
        Tls:
          CertificateAuthorityArnList:
            - "{{ CertificateAuthorityArnList }}"
          Enabled: {{ Enabled }}
        Unauthenticated:
          Enabled: {{ Enabled }}
      ConfigurationInfo:
        Arn: "{{ Arn }}"
        Revision: {{ Revision }}
      EncryptionInfo:
        EncryptionAtRest:
          DataVolumeKMSKeyId: "{{ DataVolumeKMSKeyId }}"
        EncryptionInTransit:
          ClientBroker: "{{ ClientBroker }}"
          InCluster: {{ InCluster }}
      EnhancedMonitoring: "{{ EnhancedMonitoring }}"
      OpenMonitoring:
        Prometheus:
          JmxExporter:
            EnabledInBroker: {{ EnabledInBroker }}
          NodeExporter:
            EnabledInBroker: {{ EnabledInBroker }}
      KafkaVersion: "{{ KafkaVersion }}"
      LoggingInfo:
        BrokerLogs:
          CloudWatchLogs:
            Enabled: {{ Enabled }}
            LogGroup: "{{ LogGroup }}"
          Firehose:
            DeliveryStream: "{{ DeliveryStream }}"
            Enabled: {{ Enabled }}
          S3:
            Bucket: "{{ Bucket }}"
            Enabled: {{ Enabled }}
            Prefix: "{{ Prefix }}"
      NumberOfBrokerNodes: {{ NumberOfBrokerNodes }}
      StorageMode: "{{ StorageMode }}"
  - name: Serverless
    description: |
      Serverless cluster request.
    value:
      VpcConfigs:
        - SubnetIds: "{{ SubnetIds }}"
          SecurityGroupIds: "{{ SecurityGroupIds }}"
      ClientAuthentication:
        Sasl:
          Iam:
            Enabled: {{ Enabled }}
`})})]})]})}function p(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);