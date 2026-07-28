"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["968295"],{155051(e,i,l){l.r(i),l.d(i,{metadata:()=>c,default:()=>u,frontMatter:()=>d,contentTitle:()=>h,toc:()=>x,assets:()=>p});var c=JSON.parse('{"id":"services/dlm/lifecycle_policies/index","title":"lifecycle_policies","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/dlm/lifecycle_policies/index.md","sourceDirName":"services/dlm/lifecycle_policies","slug":"/services/dlm/lifecycle_policies/","permalink":"/services/dlm/lifecycle_policies/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"lifecycle_policies","hide_title":false,"hide_table_of_contents":false,"keywords":["lifecycle_policies","dlm","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"dlm","permalink":"/services/dlm/"},"next":{"title":"tags","permalink":"/services/dlm/tags/"}}'),s=l(474848),t=l(28453),r=l(97362),n=l(897272),a=l(413554),o=l(541647);let d={title:"lifecycle_policies",hide_title:!1,hide_table_of_contents:!1,keywords:["lifecycle_policies","dlm","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,p={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function y(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,s.jsx)("code",{children:"lifecycle_policies"})," resource."]}),"\n",(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"lifecycle_policies"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Type"})}),(0,s.jsx)("td",{children:"Resource"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"aws.dlm.lifecycle_policies"})})]})]})}),"\n",(0,s.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(i.p,{children:["The following fields are returned by ",(0,s.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,s.jsxs)(a.A,{defaultValue:"get_lifecycle_policy",values:[{label:"get_lifecycle_policy",value:"get_lifecycle_policy"},{label:"get_lifecycle_policies",value:"get_lifecycle_policies"}],children:[(0,s.jsx)(o.A,{value:"get_lifecycle_policy",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DateCreated"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The local date and time when the lifecycle policy was created."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DateModified"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The local date and time when the lifecycle policy was last modified."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"DefaultPolicy"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)("td",{children:"Indicates whether the policy is a default lifecycle policy or a custom lifecycle policy. true - the policy is a default policy. false - the policy is a custom policy."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"Description"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The description of the lifecycle policy. (pattern: <code>[0-9A-Za-z _-]+</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"ExecutionRoleArn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy. (pattern: <code>arn",":aws","(-[a-z]{1,3}){0,2}:iam::\\d+",":role","/.*</code>)"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"PolicyArn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the policy. (pattern: <code>^arn",":aws","(-[a-z]{1,3}){0,2}:dlm:[A-Za-z0-9_/.-]{0,63}:\\d+",":policy","/[0-9A-Za-z_-]{1,128}$</code>)"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"PolicyDetails"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"Specifies the configuration of a lifecycle policy."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"PolicyId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The identifier of the lifecycle policy. (pattern: <code>policy-[a-f0-9]+</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"State"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The activation state of the lifecycle policy. (ENABLED, DISABLED, ERROR)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"StatusMessage"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The description of the status. (pattern: <code>[\\p{all}]*</code>)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"Tags"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"The tags."})]})]})]})}),(0,s.jsx)(o.A,{value:"get_lifecycle_policies",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"Policies"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"array"})}),(0,s.jsx)("td",{children:"Summary information about the lifecycle policies."})]})})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Accessible by"}),(0,s.jsx)("th",{children:"Required Params"}),(0,s.jsx)("th",{children:"Optional Params"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#get_lifecycle_policy",children:(0,s.jsx)(r.A,{code:"get_lifecycle_policy"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"select"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-policy_id",children:(0,s.jsx)("code",{children:"policy_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Gets detailed information about the specified lifecycle policy."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#get_lifecycle_policies",children:(0,s.jsx)(r.A,{code:"get_lifecycle_policies"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"select"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-policyIds",children:(0,s.jsx)("code",{children:"policyIds"})}),", ",(0,s.jsx)("a",{href:"#parameter-state",children:(0,s.jsx)("code",{children:"state"})}),", ",(0,s.jsx)("a",{href:"#parameter-resourceTypes",children:(0,s.jsx)("code",{children:"resourceTypes"})}),", ",(0,s.jsx)("a",{href:"#parameter-targetTags",children:(0,s.jsx)("code",{children:"targetTags"})}),", ",(0,s.jsx)("a",{href:"#parameter-tagsToAdd",children:(0,s.jsx)("code",{children:"tagsToAdd"})}),", ",(0,s.jsx)("a",{href:"#parameter-defaultPolicyType",children:(0,s.jsx)("code",{children:"defaultPolicyType"})})]}),(0,s.jsx)("td",{children:"Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#create_lifecycle_policy",children:(0,s.jsx)(r.A,{code:"create_lifecycle_policy"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"insert"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-ExecutionRoleArn",children:(0,s.jsx)("code",{children:"ExecutionRoleArn"})}),", ",(0,s.jsx)("a",{href:"#parameter-Description",children:(0,s.jsx)("code",{children:"Description"})}),", ",(0,s.jsx)("a",{href:"#parameter-State",children:(0,s.jsx)("code",{children:"State"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Creates an Amazon Data Lifecycle Manager lifecycle policy. Amazon Data Lifecycle Manager supports the following policy types: Custom EBS snapshot policy Custom EBS-backed AMI policy Cross-account copy event policy Default policy for EBS snapshots Default policy for EBS-backed AMIs For more information, see Default policies vs custom policies. If you create a default policy, you can specify the request parameters either in the request body, or in the PolicyDetails request structure, but not both."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#update_lifecycle_policy",children:(0,s.jsx)(r.A,{code:"update_lifecycle_policy"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"update"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-policy_id",children:(0,s.jsx)("code",{children:"policy_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Updates the specified lifecycle policy. For more information about updating a policy, see Modify lifecycle policies."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#delete_lifecycle_policy",children:(0,s.jsx)(r.A,{code:"delete_lifecycle_policy"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"delete"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-policy_id",children:(0,s.jsx)("code",{children:"policy_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Deletes the specified lifecycle policy and halts the automated operations that the policy specified. For more information about deleting a policy, see Delete lifecycle policies."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,s.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,s.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{id:"parameter-policy_id",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"policy_id"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The identifier of the lifecycle policy."})]}),(0,s.jsxs)("tr",{id:"parameter-region",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"region"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,s.jsxs)("tr",{id:"parameter-defaultPolicyType",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"defaultPolicyType"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"[Default policies only] Specifies the type of default policy to get. Specify one of the following: VOLUME - To get only the default policy for EBS snapshots INSTANCE - To get only the default policy for EBS-backed AMIs ALL - To get all default policies"})]}),(0,s.jsxs)("tr",{id:"parameter-policyIds",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"policyIds"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"array"})}),(0,s.jsx)("td",{children:"The identifiers of the data lifecycle policies."})]}),(0,s.jsxs)("tr",{id:"parameter-resourceTypes",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"resourceTypes"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"array"})}),(0,s.jsx)("td",{children:"The resource type."})]}),(0,s.jsxs)("tr",{id:"parameter-state",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"state"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The activation state."})]}),(0,s.jsxs)("tr",{id:"parameter-tagsToAdd",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"tagsToAdd"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"array"})}),(0,s.jsx)("td",{children:"The tags to add to objects created by the policy. Tags are strings in the format key=value. These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags."})]}),(0,s.jsxs)("tr",{id:"parameter-targetTags",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"targetTags"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"array"})}),(0,s.jsx)("td",{children:"The target tag for a policy. Tags are strings in the format key=value."})]})]})]}),"\n",(0,s.jsxs)(i.h2,{id:"select-examples",children:[(0,s.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,s.jsxs)(a.A,{defaultValue:"get_lifecycle_policy",values:[{label:"get_lifecycle_policy",value:"get_lifecycle_policy"},{label:"get_lifecycle_policies",value:"get_lifecycle_policies"}],children:[(0,s.jsxs)(o.A,{value:"get_lifecycle_policy",children:[(0,s.jsx)(i.p,{children:"Gets detailed information about the specified lifecycle policy."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"SELECT\nDateCreated,\nDateModified,\nDefaultPolicy,\nDescription,\nExecutionRoleArn,\nPolicyArn,\nPolicyDetails,\nPolicyId,\nState,\nStatusMessage,\nTags\nFROM aws.dlm.lifecycle_policies\nWHERE policy_id = '{{ policy_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,s.jsxs)(o.A,{value:"get_lifecycle_policies",children:[(0,s.jsx)(i.p,{children:"Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"SELECT\nPolicies\nFROM aws.dlm.lifecycle_policies\nWHERE region = '{{ region }}' -- required\nAND policyIds = '{{ policyIds }}'\nAND state = '{{ state }}'\nAND resourceTypes = '{{ resourceTypes }}'\nAND targetTags = '{{ targetTags }}'\nAND tagsToAdd = '{{ tagsToAdd }}'\nAND defaultPolicyType = '{{ defaultPolicyType }}'\n;\n"})})]})]}),"\n",(0,s.jsxs)(i.h2,{id:"insert-examples",children:[(0,s.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,s.jsxs)(a.A,{defaultValue:"create_lifecycle_policy",values:[{label:"create_lifecycle_policy",value:"create_lifecycle_policy"},{label:"Manifest",value:"manifest"}],children:[(0,s.jsxs)(o.A,{value:"create_lifecycle_policy",children:[(0,s.jsx)(i.p,{children:"Creates an Amazon Data Lifecycle Manager lifecycle policy. Amazon Data Lifecycle Manager supports the following policy types: Custom EBS snapshot policy Custom EBS-backed AMI policy Cross-account copy event policy Default policy for EBS snapshots Default policy for EBS-backed AMIs For more information, see Default policies vs custom policies. If you create a default policy, you can specify the request parameters either in the request body, or in the PolicyDetails request structure, but not both."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.dlm.lifecycle_policies (\nExecutionRoleArn,\nDescription,\nState,\nPolicyDetails,\nTags,\nDefaultPolicy,\nCreateInterval,\nRetainInterval,\nCopyTags,\nExtendDeletion,\nCrossRegionCopyTargets,\nExclusions,\nregion\n)\nSELECT \n'{{ ExecutionRoleArn }}' /* required */,\n'{{ Description }}' /* required */,\n'{{ State }}' /* required */,\n'{{ PolicyDetails }}',\n'{{ Tags }}',\n'{{ DefaultPolicy }}',\n{{ CreateInterval }},\n{{ RetainInterval }},\n{{ CopyTags }},\n{{ ExtendDeletion }},\n'{{ CrossRegionCopyTargets }}',\n'{{ Exclusions }}',\n'{{ region }}'\nRETURNING\nPolicyId\n;\n"})})]}),(0,s.jsx)(o.A,{value:"manifest",children:(0,s.jsx)(n.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: lifecycle_policies
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the lifecycle_policies resource.
  - name: ExecutionRoleArn
    value: "{{ ExecutionRoleArn }}"
  - name: Description
    value: "{{ Description }}"
  - name: State
    value: "{{ State }}"
    valid_values: ['ENABLED', 'DISABLED']
  - name: PolicyDetails
    description: |
      Specifies the configuration of a lifecycle policy.
    value:
      PolicyType: "{{ PolicyType }}"
      ResourceTypes:
        - "{{ ResourceTypes }}"
      ResourceLocations:
        - "{{ ResourceLocations }}"
      TargetTags:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
      Schedules:
        - Name: "{{ Name }}"
          CopyTags: {{ CopyTags }}
          TagsToAdd: "{{ TagsToAdd }}"
          VariableTags: "{{ VariableTags }}"
          CreateRule:
            Location: "{{ Location }}"
            Interval: {{ Interval }}
            IntervalUnit: "{{ IntervalUnit }}"
            Times:
              - "{{ Times }}"
            CronExpression: "{{ CronExpression }}"
            Scripts:
              - Stages: "{{ Stages }}"
                ExecutionHandlerService: "{{ ExecutionHandlerService }}"
                ExecutionHandler: "{{ ExecutionHandler }}"
                ExecuteOperationOnScriptFailure: {{ ExecuteOperationOnScriptFailure }}
                ExecutionTimeout: {{ ExecutionTimeout }}
                MaximumRetryCount: {{ MaximumRetryCount }}
          RetainRule:
            Count: {{ Count }}
            Interval: {{ Interval }}
            IntervalUnit: "{{ IntervalUnit }}"
          FastRestoreRule:
            Count: {{ Count }}
            Interval: {{ Interval }}
            IntervalUnit: "{{ IntervalUnit }}"
            AvailabilityZones:
              - "{{ AvailabilityZones }}"
            AvailabilityZoneIds:
              - "{{ AvailabilityZoneIds }}"
          CrossRegionCopyRules: "{{ CrossRegionCopyRules }}"
          ShareRules: "{{ ShareRules }}"
          DeprecateRule:
            Count: {{ Count }}
            Interval: {{ Interval }}
            IntervalUnit: "{{ IntervalUnit }}"
          ArchiveRule:
            RetainRule:
              RetentionArchiveTier:
                Count: {{ Count }}
                Interval: {{ Interval }}
                IntervalUnit: "{{ IntervalUnit }}"
      Parameters:
        ExcludeBootVolume: {{ ExcludeBootVolume }}
        NoReboot: {{ NoReboot }}
        ExcludeDataVolumeTags:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
      EventSource:
        Type: "{{ Type }}"
        Parameters:
          EventType: "{{ EventType }}"
          SnapshotOwner:
            - "{{ SnapshotOwner }}"
          DescriptionRegex: "{{ DescriptionRegex }}"
      Actions:
        - Name: "{{ Name }}"
          CrossRegionCopy: "{{ CrossRegionCopy }}"
      PolicyLanguage: "{{ PolicyLanguage }}"
      ResourceType: "{{ ResourceType }}"
      CreateInterval: {{ CreateInterval }}
      RetainInterval: {{ RetainInterval }}
      CopyTags: {{ CopyTags }}
      CrossRegionCopyTargets:
        - TargetRegion: "{{ TargetRegion }}"
      ExtendDeletion: {{ ExtendDeletion }}
      Exclusions:
        ExcludeBootVolumes: {{ ExcludeBootVolumes }}
        ExcludeVolumeTypes:
          - "{{ ExcludeVolumeTypes }}"
        ExcludeTags:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
  - name: Tags
    value: "{{ Tags }}"
  - name: DefaultPolicy
    value: "{{ DefaultPolicy }}"
    valid_values: ['VOLUME', 'INSTANCE']
  - name: CreateInterval
    value: {{ CreateInterval }}
  - name: RetainInterval
    value: {{ RetainInterval }}
  - name: CopyTags
    value: {{ CopyTags }}
  - name: ExtendDeletion
    value: {{ ExtendDeletion }}
  - name: CrossRegionCopyTargets
    value:
      - TargetRegion: "{{ TargetRegion }}"
  - name: Exclusions
    description: |
      [Default policies only] Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
    value:
      ExcludeBootVolumes: {{ ExcludeBootVolumes }}
      ExcludeVolumeTypes:
        - "{{ ExcludeVolumeTypes }}"
      ExcludeTags:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`})})]}),"\n",(0,s.jsxs)(i.h2,{id:"update-examples",children:[(0,s.jsx)(i.code,{children:"UPDATE"})," examples"]}),"\n",(0,s.jsx)(a.A,{defaultValue:"update_lifecycle_policy",values:[{label:"update_lifecycle_policy",value:"update_lifecycle_policy"}],children:(0,s.jsxs)(o.A,{value:"update_lifecycle_policy",children:[(0,s.jsx)(i.p,{children:"Updates the specified lifecycle policy. For more information about updating a policy, see Modify lifecycle policies."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.dlm.lifecycle_policies\nSET \nExecutionRoleArn = '{{ ExecutionRoleArn }}',\nState = '{{ State }}',\nDescription = '{{ Description }}',\nPolicyDetails = '{{ PolicyDetails }}',\nCreateInterval = {{ CreateInterval }},\nRetainInterval = {{ RetainInterval }},\nCopyTags = {{ CopyTags }},\nExtendDeletion = {{ ExtendDeletion }},\nCrossRegionCopyTargets = '{{ CrossRegionCopyTargets }}',\nExclusions = '{{ Exclusions }}'\nWHERE \npolicy_id = '{{ policy_id }}' --required\nAND region = '{{ region }}' --required;\n"})})]})}),"\n",(0,s.jsxs)(i.h2,{id:"delete-examples",children:[(0,s.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,s.jsx)(a.A,{defaultValue:"delete_lifecycle_policy",values:[{label:"delete_lifecycle_policy",value:"delete_lifecycle_policy"}],children:(0,s.jsxs)(o.A,{value:"delete_lifecycle_policy",children:[(0,s.jsx)(i.p,{children:"Deletes the specified lifecycle policy and halts the automated operations that the policy specified. For more information about deleting a policy, see Delete lifecycle policies."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.dlm.lifecycle_policies\nWHERE policy_id = '{{ policy_id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function u(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}}}]);