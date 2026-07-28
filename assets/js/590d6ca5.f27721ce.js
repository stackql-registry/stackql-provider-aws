"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["647459"],{148089(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>x,frontMatter:()=>d,contentTitle:()=>h,toc:()=>p,assets:()=>u});var i=JSON.parse('{"id":"services/iot/topic_rules/index","title":"topic_rules","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/iot/topic_rules/index.md","sourceDirName":"services/iot/topic_rules","slug":"/services/iot/topic_rules/","permalink":"/services/iot/topic_rules/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"topic_rules","hide_title":false,"hide_table_of_contents":false,"keywords":["topic_rules","iot","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"topic_rule_destinations","permalink":"/services/iot/topic_rule_destinations/"},"next":{"title":"v2_logging_levels","permalink":"/services/iot/v2_logging_levels/"}}'),a=t(474848),s=t(28453),n=t(97362),l=t(897272),o=t(413554),c=t(541647);let d={title:"topic_rules",hide_title:!1,hide_table_of_contents:!1,keywords:["topic_rules","iot","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>REPLACE</code> examples",id:"replace-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function m(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,a.jsx)("code",{children:"topic_rules"})," resource."]}),"\n",(0,a.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"topic_rules"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Type"})}),(0,a.jsx)("td",{children:"Resource"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"aws.iot.topic_rules"})})]})]})}),"\n",(0,a.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(r.p,{children:["The following fields are returned by ",(0,a.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"get_topic_rule",values:[{label:"get_topic_rule",value:"get_topic_rule"},{label:"list_topic_rules",value:"list_topic_rules"}],children:[(0,a.jsx)(c.A,{value:"get_topic_rule",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"rule"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The rule."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"ruleArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The rule ARN."})]})]})]})}),(0,a.jsx)(c.A,{value:"list_topic_rules",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"createdAt"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The date and time the rule was created."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"ruleArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The rule ARN."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"ruleDisabled"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"boolean"})}),(0,a.jsx)("td",{children:"Specifies whether the rule is disabled."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"ruleName"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the rule. (pattern: <code>^[a-zA-Z0-9_]+$</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"topicPattern"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The pattern for the topic names that apply."})]})]})]})})]}),"\n",(0,a.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Accessible by"}),(0,a.jsx)("th",{children:"Required Params"}),(0,a.jsx)("th",{children:"Optional Params"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#get_topic_rule",children:(0,a.jsx)(n.A,{code:"get_topic_rule"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"select"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-rule_name",children:(0,a.jsx)("code",{children:"rule_name"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Gets information about the rule. Requires permission to access the GetTopicRule action."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#list_topic_rules",children:(0,a.jsx)(n.A,{code:"list_topic_rules"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"select"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-topic",children:(0,a.jsx)("code",{children:"topic"})}),", ",(0,a.jsx)("a",{href:"#parameter-maxResults",children:(0,a.jsx)("code",{children:"maxResults"})}),", ",(0,a.jsx)("a",{href:"#parameter-nextToken",children:(0,a.jsx)("code",{children:"nextToken"})}),", ",(0,a.jsx)("a",{href:"#parameter-ruleDisabled",children:(0,a.jsx)("code",{children:"ruleDisabled"})})]}),(0,a.jsx)("td",{children:"Lists the rules for the specific topic. Requires permission to access the ListTopicRules action."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#create_topic_rule",children:(0,a.jsx)(n.A,{code:"create_topic_rule"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"insert"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-rule_name",children:(0,a.jsx)("code",{children:"rule_name"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-topicRulePayload",children:(0,a.jsx)("code",{children:"topicRulePayload"})})]}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-x-amz-tagging",children:(0,a.jsx)("code",{children:"x-amz-tagging"})})}),(0,a.jsx)("td",{children:"Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule. Requires permission to access the CreateTopicRule action."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#replace_topic_rule",children:(0,a.jsx)(n.A,{code:"replace_topic_rule"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"replace"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-rule_name",children:(0,a.jsx)("code",{children:"rule_name"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-topicRulePayload",children:(0,a.jsx)("code",{children:"topicRulePayload"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule. Requires permission to access the ReplaceTopicRule action."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#delete_topic_rule",children:(0,a.jsx)(n.A,{code:"delete_topic_rule"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"delete"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-rule_name",children:(0,a.jsx)("code",{children:"rule_name"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Deletes the rule. Requires permission to access the DeleteTopicRule action."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#confirm_topic_rule_destination",children:(0,a.jsx)(n.A,{code:"confirm_topic_rule_destination"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-confirmation_token",children:(0,a.jsx)("code",{children:"confirmation_token"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling ConfirmTopicRuleDestination to confirm that you own or have access to the endpoint. Requires permission to access the ConfirmTopicRuleDestination action."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,a.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,a.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{id:"parameter-confirmation_token",children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"confirmation_token"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The token used to confirm ownership or access to the topic rule confirmation URL."})]}),(0,a.jsxs)("tr",{id:"parameter-region",children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"region"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,a.jsxs)("tr",{id:"parameter-rule_name",children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"rule_name"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the rule."})]}),(0,a.jsxs)("tr",{id:"parameter-maxResults",children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"maxResults"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"integer"})}),(0,a.jsx)("td",{children:"The maximum number of results to return."})]}),(0,a.jsxs)("tr",{id:"parameter-nextToken",children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"nextToken"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results."})]}),(0,a.jsxs)("tr",{id:"parameter-ruleDisabled",children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"ruleDisabled"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"boolean"})}),(0,a.jsx)("td",{children:"Specifies whether the rule is disabled."})]}),(0,a.jsxs)("tr",{id:"parameter-topic",children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"topic"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The topic."})]}),(0,a.jsxs)("tr",{id:"parameter-x-amz-tagging",children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.A,{code:"x-amz-tagging"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:'Metadata which can be used to manage the topic rule. For URI Request parameters use format: ...key1=value1&key2=value2... For the CLI command-line parameter use format: --tags "key1=value1&key2=value2..." For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."'})]})]})]}),"\n",(0,a.jsxs)(r.h2,{id:"select-examples",children:[(0,a.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"get_topic_rule",values:[{label:"get_topic_rule",value:"get_topic_rule"},{label:"list_topic_rules",value:"list_topic_rules"}],children:[(0,a.jsxs)(c.A,{value:"get_topic_rule",children:[(0,a.jsx)(r.p,{children:"Gets information about the rule. Requires permission to access the GetTopicRule action."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"SELECT\nrule,\nruleArn\nFROM aws.iot.topic_rules\nWHERE rule_name = '{{ rule_name }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,a.jsxs)(c.A,{value:"list_topic_rules",children:[(0,a.jsx)(r.p,{children:"Lists the rules for the specific topic. Requires permission to access the ListTopicRules action."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"SELECT\ncreatedAt,\nruleArn,\nruleDisabled,\nruleName,\ntopicPattern\nFROM aws.iot.topic_rules\nWHERE region = '{{ region }}' -- required\nAND topic = '{{ topic }}'\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\nAND ruleDisabled = '{{ ruleDisabled }}'\n;\n"})})]})]}),"\n",(0,a.jsxs)(r.h2,{id:"insert-examples",children:[(0,a.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"create_topic_rule",values:[{label:"create_topic_rule",value:"create_topic_rule"},{label:"Manifest",value:"manifest"}],children:[(0,a.jsxs)(c.A,{value:"create_topic_rule",children:[(0,a.jsx)(r.p,{children:"Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule. Requires permission to access the CreateTopicRule action."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.iot.topic_rules (\ntopicRulePayload,\nrule_name,\nregion,\n`x-amz-tagging`\n)\nSELECT \n'{{ topicRulePayload }}' /* required */,\n'{{ rule_name }}',\n'{{ region }}',\n'{{ x-amz-tagging }}'\n;\n"})})]}),(0,a.jsx)(c.A,{value:"manifest",children:(0,a.jsx)(l.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: topic_rules
props:
  - name: rule_name
    value: "{{ rule_name }}"
    description: Required parameter for the topic_rules resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the topic_rules resource.
  - name: topicRulePayload
    description: |
      Describes a rule.
    value:
      sql: "{{ sql }}"
      description: "{{ description }}"
      actions:
        - dynamoDB:
            tableName: "{{ tableName }}"
            roleArn: "{{ roleArn }}"
            operation: "{{ operation }}"
            hashKeyField: "{{ hashKeyField }}"
            hashKeyValue: "{{ hashKeyValue }}"
            hashKeyType: "{{ hashKeyType }}"
            rangeKeyField: "{{ rangeKeyField }}"
            rangeKeyValue: "{{ rangeKeyValue }}"
            rangeKeyType: "{{ rangeKeyType }}"
            payloadField: "{{ payloadField }}"
          dynamoDBv2:
            roleArn: "{{ roleArn }}"
            putItem:
              tableName: "{{ tableName }}"
          lambda:
            functionArn: "{{ functionArn }}"
          sns:
            targetArn: "{{ targetArn }}"
            roleArn: "{{ roleArn }}"
            messageFormat: "{{ messageFormat }}"
          sqs:
            roleArn: "{{ roleArn }}"
            queueUrl: "{{ queueUrl }}"
            useBase64: {{ useBase64 }}
          kinesis:
            roleArn: "{{ roleArn }}"
            streamName: "{{ streamName }}"
            partitionKey: "{{ partitionKey }}"
          republish:
            roleArn: "{{ roleArn }}"
            topic: "{{ topic }}"
            qos: {{ qos }}
            headers:
              payloadFormatIndicator: "{{ payloadFormatIndicator }}"
              contentType: "{{ contentType }}"
              responseTopic: "{{ responseTopic }}"
              correlationData: "{{ correlationData }}"
              messageExpiry: "{{ messageExpiry }}"
              userProperties:
                - key: "{{ key }}"
                  value: "{{ value }}"
          s3:
            roleArn: "{{ roleArn }}"
            bucketName: "{{ bucketName }}"
            key: "{{ key }}"
            cannedAcl: "{{ cannedAcl }}"
          firehose:
            roleArn: "{{ roleArn }}"
            deliveryStreamName: "{{ deliveryStreamName }}"
            separator: "{{ separator }}"
            batchMode: {{ batchMode }}
          cloudwatchMetric:
            roleArn: "{{ roleArn }}"
            metricNamespace: "{{ metricNamespace }}"
            metricName: "{{ metricName }}"
            metricValue: "{{ metricValue }}"
            metricUnit: "{{ metricUnit }}"
            metricTimestamp: "{{ metricTimestamp }}"
          cloudwatchAlarm:
            roleArn: "{{ roleArn }}"
            alarmName: "{{ alarmName }}"
            stateReason: "{{ stateReason }}"
            stateValue: "{{ stateValue }}"
          cloudwatchLogs:
            roleArn: "{{ roleArn }}"
            logGroupName: "{{ logGroupName }}"
            batchMode: {{ batchMode }}
          elasticsearch:
            roleArn: "{{ roleArn }}"
            endpoint: "{{ endpoint }}"
            index: "{{ index }}"
            type_: "{{ type_ }}"
            id: "{{ id }}"
          salesforce:
            token: "{{ token }}"
            url: "{{ url }}"
          iotAnalytics:
            channelArn: "{{ channelArn }}"
            channelName: "{{ channelName }}"
            batchMode: {{ batchMode }}
            roleArn: "{{ roleArn }}"
          iotEvents:
            inputName: "{{ inputName }}"
            messageId: "{{ messageId }}"
            batchMode: {{ batchMode }}
            roleArn: "{{ roleArn }}"
          iotSiteWise:
            putAssetPropertyValueEntries:
              - entryId: "{{ entryId }}"
                assetId: "{{ assetId }}"
                propertyId: "{{ propertyId }}"
                propertyAlias: "{{ propertyAlias }}"
                propertyValues: "{{ propertyValues }}"
            roleArn: "{{ roleArn }}"
          stepFunctions:
            executionNamePrefix: "{{ executionNamePrefix }}"
            stateMachineName: "{{ stateMachineName }}"
            roleArn: "{{ roleArn }}"
          timestream:
            roleArn: "{{ roleArn }}"
            databaseName: "{{ databaseName }}"
            tableName: "{{ tableName }}"
            dimensions:
              - name: "{{ name }}"
                value: "{{ value }}"
            timestamp:
              value: "{{ value }}"
              unit: "{{ unit }}"
          http:
            url: "{{ url }}"
            confirmationUrl: "{{ confirmationUrl }}"
            headers:
              - key: "{{ key }}"
                value: "{{ value }}"
            auth:
              sigv4:
                signingRegion: "{{ signingRegion }}"
                serviceName: "{{ serviceName }}"
                roleArn: "{{ roleArn }}"
            enableBatching: {{ enableBatching }}
            batchConfig:
              maxBatchOpenMs: {{ maxBatchOpenMs }}
              maxBatchSize: {{ maxBatchSize }}
              maxBatchSizeBytes: {{ maxBatchSizeBytes }}
              batchAcrossTopics: {{ batchAcrossTopics }}
          kafka:
            destinationArn: "{{ destinationArn }}"
            topic: "{{ topic }}"
            key: "{{ key }}"
            partition: "{{ partition }}"
            clientProperties: "{{ clientProperties }}"
            headers:
              - key: "{{ key }}"
                value: "{{ value }}"
          openSearch:
            roleArn: "{{ roleArn }}"
            endpoint: "{{ endpoint }}"
            index: "{{ index }}"
            type_: "{{ type_ }}"
            id: "{{ id }}"
          location:
            roleArn: "{{ roleArn }}"
            trackerName: "{{ trackerName }}"
            deviceId: "{{ deviceId }}"
            timestamp:
              value: "{{ value }}"
              unit: "{{ unit }}"
            latitude: "{{ latitude }}"
            longitude: "{{ longitude }}"
      ruleDisabled: {{ ruleDisabled }}
      awsIotSqlVersion: "{{ awsIotSqlVersion }}"
      errorAction:
        dynamoDB:
          tableName: "{{ tableName }}"
          roleArn: "{{ roleArn }}"
          operation: "{{ operation }}"
          hashKeyField: "{{ hashKeyField }}"
          hashKeyValue: "{{ hashKeyValue }}"
          hashKeyType: "{{ hashKeyType }}"
          rangeKeyField: "{{ rangeKeyField }}"
          rangeKeyValue: "{{ rangeKeyValue }}"
          rangeKeyType: "{{ rangeKeyType }}"
          payloadField: "{{ payloadField }}"
        dynamoDBv2:
          roleArn: "{{ roleArn }}"
          putItem:
            tableName: "{{ tableName }}"
        lambda:
          functionArn: "{{ functionArn }}"
        sns:
          targetArn: "{{ targetArn }}"
          roleArn: "{{ roleArn }}"
          messageFormat: "{{ messageFormat }}"
        sqs:
          roleArn: "{{ roleArn }}"
          queueUrl: "{{ queueUrl }}"
          useBase64: {{ useBase64 }}
        kinesis:
          roleArn: "{{ roleArn }}"
          streamName: "{{ streamName }}"
          partitionKey: "{{ partitionKey }}"
        republish:
          roleArn: "{{ roleArn }}"
          topic: "{{ topic }}"
          qos: {{ qos }}
          headers:
            payloadFormatIndicator: "{{ payloadFormatIndicator }}"
            contentType: "{{ contentType }}"
            responseTopic: "{{ responseTopic }}"
            correlationData: "{{ correlationData }}"
            messageExpiry: "{{ messageExpiry }}"
            userProperties:
              - key: "{{ key }}"
                value: "{{ value }}"
        s3:
          roleArn: "{{ roleArn }}"
          bucketName: "{{ bucketName }}"
          key: "{{ key }}"
          cannedAcl: "{{ cannedAcl }}"
        firehose:
          roleArn: "{{ roleArn }}"
          deliveryStreamName: "{{ deliveryStreamName }}"
          separator: "{{ separator }}"
          batchMode: {{ batchMode }}
        cloudwatchMetric:
          roleArn: "{{ roleArn }}"
          metricNamespace: "{{ metricNamespace }}"
          metricName: "{{ metricName }}"
          metricValue: "{{ metricValue }}"
          metricUnit: "{{ metricUnit }}"
          metricTimestamp: "{{ metricTimestamp }}"
        cloudwatchAlarm:
          roleArn: "{{ roleArn }}"
          alarmName: "{{ alarmName }}"
          stateReason: "{{ stateReason }}"
          stateValue: "{{ stateValue }}"
        cloudwatchLogs:
          roleArn: "{{ roleArn }}"
          logGroupName: "{{ logGroupName }}"
          batchMode: {{ batchMode }}
        elasticsearch:
          roleArn: "{{ roleArn }}"
          endpoint: "{{ endpoint }}"
          index: "{{ index }}"
          type_: "{{ type_ }}"
          id: "{{ id }}"
        salesforce:
          token: "{{ token }}"
          url: "{{ url }}"
        iotAnalytics:
          channelArn: "{{ channelArn }}"
          channelName: "{{ channelName }}"
          batchMode: {{ batchMode }}
          roleArn: "{{ roleArn }}"
        iotEvents:
          inputName: "{{ inputName }}"
          messageId: "{{ messageId }}"
          batchMode: {{ batchMode }}
          roleArn: "{{ roleArn }}"
        iotSiteWise:
          putAssetPropertyValueEntries:
            - entryId: "{{ entryId }}"
              assetId: "{{ assetId }}"
              propertyId: "{{ propertyId }}"
              propertyAlias: "{{ propertyAlias }}"
              propertyValues: "{{ propertyValues }}"
          roleArn: "{{ roleArn }}"
        stepFunctions:
          executionNamePrefix: "{{ executionNamePrefix }}"
          stateMachineName: "{{ stateMachineName }}"
          roleArn: "{{ roleArn }}"
        timestream:
          roleArn: "{{ roleArn }}"
          databaseName: "{{ databaseName }}"
          tableName: "{{ tableName }}"
          dimensions:
            - name: "{{ name }}"
              value: "{{ value }}"
          timestamp:
            value: "{{ value }}"
            unit: "{{ unit }}"
        http:
          url: "{{ url }}"
          confirmationUrl: "{{ confirmationUrl }}"
          headers:
            - key: "{{ key }}"
              value: "{{ value }}"
          auth:
            sigv4:
              signingRegion: "{{ signingRegion }}"
              serviceName: "{{ serviceName }}"
              roleArn: "{{ roleArn }}"
          enableBatching: {{ enableBatching }}
          batchConfig:
            maxBatchOpenMs: {{ maxBatchOpenMs }}
            maxBatchSize: {{ maxBatchSize }}
            maxBatchSizeBytes: {{ maxBatchSizeBytes }}
            batchAcrossTopics: {{ batchAcrossTopics }}
        kafka:
          destinationArn: "{{ destinationArn }}"
          topic: "{{ topic }}"
          key: "{{ key }}"
          partition: "{{ partition }}"
          clientProperties: "{{ clientProperties }}"
          headers:
            - key: "{{ key }}"
              value: "{{ value }}"
        openSearch:
          roleArn: "{{ roleArn }}"
          endpoint: "{{ endpoint }}"
          index: "{{ index }}"
          type_: "{{ type_ }}"
          id: "{{ id }}"
        location:
          roleArn: "{{ roleArn }}"
          trackerName: "{{ trackerName }}"
          deviceId: "{{ deviceId }}"
          timestamp:
            value: "{{ value }}"
            unit: "{{ unit }}"
          latitude: "{{ latitude }}"
          longitude: "{{ longitude }}"
  - name: x-amz-tagging
    value: "{{ x-amz-tagging }}"
    description: Metadata which can be used to manage the topic rule. For URI Request parameters use format: ...key1=value1&key2=value2... For the CLI command-line parameter use format: --tags "key1=value1&key2=value2..." For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
    description: Metadata which can be used to manage the topic rule. For URI Request parameters use format: ...key1=value1&key2=value2... For the CLI command-line parameter use format: --tags "key1=value1&key2=value2..." For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
`})})]}),"\n",(0,a.jsxs)(r.h2,{id:"replace-examples",children:[(0,a.jsx)(r.code,{children:"REPLACE"})," examples"]}),"\n",(0,a.jsx)(o.A,{defaultValue:"replace_topic_rule",values:[{label:"replace_topic_rule",value:"replace_topic_rule"}],children:(0,a.jsxs)(c.A,{value:"replace_topic_rule",children:[(0,a.jsx)(r.p,{children:"Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule. Requires permission to access the ReplaceTopicRule action."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"REPLACE aws.iot.topic_rules\nSET \ntopicRulePayload = '{{ topicRulePayload }}'\nWHERE \nrule_name = '{{ rule_name }}' --required\nAND region = '{{ region }}' --required\nAND topicRulePayload = '{{ topicRulePayload }}' --required;\n"})})]})}),"\n",(0,a.jsxs)(r.h2,{id:"delete-examples",children:[(0,a.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,a.jsx)(o.A,{defaultValue:"delete_topic_rule",values:[{label:"delete_topic_rule",value:"delete_topic_rule"}],children:(0,a.jsxs)(c.A,{value:"delete_topic_rule",children:[(0,a.jsx)(r.p,{children:"Deletes the rule. Requires permission to access the DeleteTopicRule action."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.iot.topic_rules\nWHERE rule_name = '{{ rule_name }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,a.jsx)(r.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,a.jsx)(o.A,{defaultValue:"confirm_topic_rule_destination",values:[{label:"confirm_topic_rule_destination",value:"confirm_topic_rule_destination"}],children:(0,a.jsxs)(c.A,{value:"confirm_topic_rule_destination",children:[(0,a.jsx)(r.p,{children:"Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling ConfirmTopicRuleDestination to confirm that you own or have access to the endpoint. Requires permission to access the ConfirmTopicRuleDestination action."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"EXEC aws.iot.topic_rules.confirm_topic_rule_destination \n@confirmation_token='{{ confirmation_token }}' --required, \n@region='{{ region }}' --required\n;\n"})})]})})]})}function x(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}}}]);