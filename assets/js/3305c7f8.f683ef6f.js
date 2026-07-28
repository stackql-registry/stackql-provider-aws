"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["332177"],{867809(e,s,n){n.r(s),n.d(s,{metadata:()=>r,default:()=>j,frontMatter:()=>l,contentTitle:()=>p,toc:()=>u,assets:()=>h});var r=JSON.parse('{"id":"services/workspaces_instances/workspace_instances/index","title":"workspace_instances","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/workspaces_instances/workspace_instances/index.md","sourceDirName":"services/workspaces_instances/workspace_instances","slug":"/services/workspaces_instances/workspace_instances/","permalink":"/services/workspaces_instances/workspace_instances/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"workspace_instances","hide_title":false,"hide_table_of_contents":false,"keywords":["workspace_instances","workspaces_instances","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"volumes","permalink":"/services/workspaces_instances/volumes/"},"next":{"title":"workspaces_thin_client","permalink":"/services/workspaces_thin_client/"}}'),i=n(474848),a=n(28453),t=n(97362),c=n(897272),d=n(413554),o=n(541647);let l={title:"workspace_instances",hide_title:!1,hide_table_of_contents:!1,keywords:["workspace_instances","workspaces_instances","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},p,h={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function x(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Creates, updates, deletes, gets or lists a ",(0,i.jsx)("code",{children:"workspace_instances"})," resource."]}),"\n",(0,i.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"workspace_instances"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"aws.workspaces_instances.workspace_instances"})})]})]})}),"\n",(0,i.jsx)(s.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(s.p,{children:["The following fields are returned by ",(0,i.jsx)(s.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsxs)(d.A,{defaultValue:"get_workspace_instance",values:[{label:"get_workspace_instance",value:"get_workspace_instance"},{label:"list_workspace_instances",value:"list_workspace_instances"}],children:[(0,i.jsx)(o.A,{value:"get_workspace_instance",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"BillingConfiguration"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Returns the current billing configuration for the WorkSpace Instance, indicating the active billing mode."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"EC2InstanceErrors"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Includes any underlying EC2 instance errors encountered."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"EC2ManagedInstance"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Details of the associated EC2 managed instance."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"ProvisionState"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Current provisioning state of the WorkSpaces Instance. (ALLOCATING, ALLOCATED, DEALLOCATING, DEALLOCATED, ERROR_ALLOCATING, ERROR_DEALLOCATING)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"WorkspaceInstanceErrors"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Captures any errors specific to the WorkSpace Instance lifecycle."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"WorkspaceInstanceId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Unique identifier of the retrieved WorkSpaces Instance. (pattern: <code>wsinst-[0-9a-zA-Z]{8,63}</code>)"})]})]})]})}),(0,i.jsx)(o.A,{value:"list_workspace_instances",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"EC2ManagedInstance"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Details of the associated EC2 managed instance."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"ProvisionState"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Current provisioning state of the WorkSpace Instance. (ALLOCATING, ALLOCATED, DEALLOCATING, DEALLOCATED, ERROR_ALLOCATING, ERROR_DEALLOCATING)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"WorkspaceInstanceId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Unique identifier for the WorkSpace Instance. (pattern: <code>wsinst-[0-9a-zA-Z]{8,63}</code>)"})]})]})]})})]}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#get_workspace_instance",children:(0,i.jsx)(t.A,{code:"get_workspace_instance"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Retrieves detailed information about a specific WorkSpace Instance."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#list_workspace_instances",children:(0,i.jsx)(t.A,{code:"list_workspace_instances"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Retrieves a collection of WorkSpaces Instances based on specified filters."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_workspace_instance",children:(0,i.jsx)(t.A,{code:"create_workspace_instance"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-ManagedInstance",children:(0,i.jsx)("code",{children:"ManagedInstance"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Launches a new WorkSpace Instance with specified configuration parameters, enabling programmatic workspace deployment."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#delete_workspace_instance",children:(0,i.jsx)(t.A,{code:"delete_workspace_instance"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"delete"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Deletes the specified WorkSpace Usage of this API will result in deletion of the resource in question."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["Parameters can be passed in the ",(0,i.jsx)(s.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(s.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"select-examples",children:[(0,i.jsx)(s.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsxs)(d.A,{defaultValue:"get_workspace_instance",values:[{label:"get_workspace_instance",value:"get_workspace_instance"},{label:"list_workspace_instances",value:"list_workspace_instances"}],children:[(0,i.jsxs)(o.A,{value:"get_workspace_instance",children:[(0,i.jsx)(s.p,{children:"Retrieves detailed information about a specific WorkSpace Instance."}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"SELECT\nBillingConfiguration,\nEC2InstanceErrors,\nEC2ManagedInstance,\nProvisionState,\nWorkspaceInstanceErrors,\nWorkspaceInstanceId\nFROM aws.workspaces_instances.workspace_instances\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,i.jsxs)(o.A,{value:"list_workspace_instances",children:[(0,i.jsx)(s.p,{children:"Retrieves a collection of WorkSpaces Instances based on specified filters."}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"SELECT\nEC2ManagedInstance,\nProvisionState,\nWorkspaceInstanceId\nFROM aws.workspaces_instances.workspace_instances\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,i.jsxs)(s.h2,{id:"insert-examples",children:[(0,i.jsx)(s.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(d.A,{defaultValue:"create_workspace_instance",values:[{label:"create_workspace_instance",value:"create_workspace_instance"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(o.A,{value:"create_workspace_instance",children:[(0,i.jsx)(s.p,{children:"Launches a new WorkSpace Instance with specified configuration parameters, enabling programmatic workspace deployment."}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"INSERT INTO aws.workspaces_instances.workspace_instances (\nClientToken,\nTags,\nManagedInstance,\nBillingConfiguration,\nregion\n)\nSELECT \n'{{ ClientToken }}',\n'{{ Tags }}',\n'{{ ManagedInstance }}' /* required */,\n'{{ BillingConfiguration }}',\n'{{ region }}'\nRETURNING\nWorkspaceInstanceId\n;\n"})})]}),(0,i.jsx)(o.A,{value:"manifest",children:(0,i.jsx)(c.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: workspace_instances
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the workspace_instances resource.
  - name: ClientToken
    value: "{{ ClientToken }}"
    description: |
      Unique token to ensure idempotent instance creation, preventing duplicate workspace launches.
  - name: Tags
    description: |
      Optional metadata tags for categorizing and managing WorkSpaces Instances.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: ManagedInstance
    description: |
      Comprehensive configuration settings for the WorkSpaces Instance, including network, compute, and storage parameters.
    value:
      BlockDeviceMappings:
        - DeviceName: "{{ DeviceName }}"
          Ebs:
            VolumeType: "{{ VolumeType }}"
            Encrypted: {{ Encrypted }}
            KmsKeyId: "{{ KmsKeyId }}"
            Iops: {{ Iops }}
            Throughput: {{ Throughput }}
            VolumeSize: {{ VolumeSize }}
          NoDevice: "{{ NoDevice }}"
          VirtualName: "{{ VirtualName }}"
      CapacityReservationSpecification:
        CapacityReservationPreference: "{{ CapacityReservationPreference }}"
        CapacityReservationTarget:
          CapacityReservationId: "{{ CapacityReservationId }}"
          CapacityReservationResourceGroupArn: "{{ CapacityReservationResourceGroupArn }}"
      CpuOptions:
        AmdSevSnp: "{{ AmdSevSnp }}"
        CoreCount: {{ CoreCount }}
        ThreadsPerCore: {{ ThreadsPerCore }}
      CreditSpecification:
        CpuCredits: "{{ CpuCredits }}"
      DisableApiStop: {{ DisableApiStop }}
      EbsOptimized: {{ EbsOptimized }}
      EnablePrimaryIpv6: {{ EnablePrimaryIpv6 }}
      EnclaveOptions:
        Enabled: {{ Enabled }}
      HibernationOptions:
        Configured: {{ Configured }}
      IamInstanceProfile:
        Arn: "{{ Arn }}"
        Name: "{{ Name }}"
      ImageId: "{{ ImageId }}"
      InstanceMarketOptions:
        MarketType: "{{ MarketType }}"
        SpotOptions:
          BlockDurationMinutes: {{ BlockDurationMinutes }}
          InstanceInterruptionBehavior: "{{ InstanceInterruptionBehavior }}"
          MaxPrice: "{{ MaxPrice }}"
          SpotInstanceType: "{{ SpotInstanceType }}"
          ValidUntilUtc: "{{ ValidUntilUtc }}"
      InstanceType: "{{ InstanceType }}"
      Ipv6Addresses:
        - Ipv6Address: "{{ Ipv6Address }}"
          IsPrimaryIpv6: {{ IsPrimaryIpv6 }}
      Ipv6AddressCount: {{ Ipv6AddressCount }}
      KernelId: "{{ KernelId }}"
      KeyName: "{{ KeyName }}"
      LicenseSpecifications:
        - LicenseConfigurationArn: "{{ LicenseConfigurationArn }}"
      MaintenanceOptions:
        AutoRecovery: "{{ AutoRecovery }}"
      MetadataOptions:
        HttpEndpoint: "{{ HttpEndpoint }}"
        HttpProtocolIpv6: "{{ HttpProtocolIpv6 }}"
        HttpPutResponseHopLimit: {{ HttpPutResponseHopLimit }}
        HttpTokens: "{{ HttpTokens }}"
        InstanceMetadataTags: "{{ InstanceMetadataTags }}"
      Monitoring:
        Enabled: {{ Enabled }}
      NetworkInterfaces:
        - AssociateCarrierIpAddress: {{ AssociateCarrierIpAddress }}
          AssociatePublicIpAddress: {{ AssociatePublicIpAddress }}
          ConnectionTrackingSpecification:
            TcpEstablishedTimeout: {{ TcpEstablishedTimeout }}
            UdpStreamTimeout: {{ UdpStreamTimeout }}
            UdpTimeout: {{ UdpTimeout }}
          Description: "{{ Description }}"
          DeviceIndex: {{ DeviceIndex }}
          EnaSrdSpecification:
            EnaSrdEnabled: {{ EnaSrdEnabled }}
            EnaSrdUdpSpecification:
              EnaSrdUdpEnabled: {{ EnaSrdUdpEnabled }}
          InterfaceType: "{{ InterfaceType }}"
          Ipv4Prefixes: "{{ Ipv4Prefixes }}"
          Ipv4PrefixCount: {{ Ipv4PrefixCount }}
          Ipv6AddressCount: {{ Ipv6AddressCount }}
          Ipv6Addresses: "{{ Ipv6Addresses }}"
          Ipv6Prefixes: "{{ Ipv6Prefixes }}"
          Ipv6PrefixCount: {{ Ipv6PrefixCount }}
          NetworkCardIndex: {{ NetworkCardIndex }}
          NetworkInterfaceId: "{{ NetworkInterfaceId }}"
          PrimaryIpv6: {{ PrimaryIpv6 }}
          PrivateIpAddress: "{{ PrivateIpAddress }}"
          PrivateIpAddresses: "{{ PrivateIpAddresses }}"
          SecondaryPrivateIpAddressCount: {{ SecondaryPrivateIpAddressCount }}
          Groups: "{{ Groups }}"
          SubnetId: "{{ SubnetId }}"
      NetworkPerformanceOptions:
        BandwidthWeighting: "{{ BandwidthWeighting }}"
      Placement:
        Affinity: "{{ Affinity }}"
        AvailabilityZone: "{{ AvailabilityZone }}"
        GroupId: "{{ GroupId }}"
        GroupName: "{{ GroupName }}"
        HostId: "{{ HostId }}"
        HostResourceGroupArn: "{{ HostResourceGroupArn }}"
        PartitionNumber: {{ PartitionNumber }}
        Tenancy: "{{ Tenancy }}"
      PrivateDnsNameOptions:
        HostnameType: "{{ HostnameType }}"
        EnableResourceNameDnsARecord: {{ EnableResourceNameDnsARecord }}
        EnableResourceNameDnsAAAARecord: {{ EnableResourceNameDnsAAAARecord }}
      PrivateIpAddress: "{{ PrivateIpAddress }}"
      RamdiskId: "{{ RamdiskId }}"
      SecurityGroupIds:
        - "{{ SecurityGroupIds }}"
      SecurityGroups:
        - "{{ SecurityGroups }}"
      SubnetId: "{{ SubnetId }}"
      TagSpecifications:
        - ResourceType: "{{ ResourceType }}"
          Tags: "{{ Tags }}"
      UserData: "{{ UserData }}"
  - name: BillingConfiguration
    description: |
      Optional billing configuration for the WorkSpace Instance. Allows customers to specify their preferred billing mode when creating a new instance. Defaults to hourly billing if not specified.
    value:
      BillingMode: "{{ BillingMode }}"
`})})]}),"\n",(0,i.jsxs)(s.h2,{id:"delete-examples",children:[(0,i.jsx)(s.code,{children:"DELETE"})," examples"]}),"\n",(0,i.jsx)(d.A,{defaultValue:"delete_workspace_instance",values:[{label:"delete_workspace_instance",value:"delete_workspace_instance"}],children:(0,i.jsxs)(o.A,{value:"delete_workspace_instance",children:[(0,i.jsx)(s.p,{children:"Deletes the specified WorkSpace Usage of this API will result in deletion of the resource in question."}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"DELETE FROM aws.workspaces_instances.workspace_instances\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function j(e={}){let{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);