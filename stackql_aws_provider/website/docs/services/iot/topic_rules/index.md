--- 
title: topic_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_rules
  - iot
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>topic_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.topic_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_topic_rule"
    values={[
        { label: 'get_topic_rule', value: 'get_topic_rule' },
        { label: 'list_topic_rules', value: 'list_topic_rules' }
    ]}
>
<TabItem value="get_topic_rule">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td>The rule.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The rule ARN.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_topic_rules">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The rule ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_disabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the rule is disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="topic_pattern" /></td>
    <td><code>string</code></td>
    <td>The pattern for the topic names that apply.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_topic_rule"><CopyableCode code="get_topic_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the rule. Requires permission to access the GetTopicRule action.</td>
</tr>
<tr>
    <td><a href="#list_topic_rules"><CopyableCode code="list_topic_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-topic"><code>topic</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-ruleDisabled"><code>ruleDisabled</code></a></td>
    <td>Lists the rules for the specific topic. Requires permission to access the ListTopicRules action.</td>
</tr>
<tr>
    <td><a href="#create_topic_rule"><CopyableCode code="create_topic_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-topicRulePayload"><code>topicRulePayload</code></a></td>
    <td><a href="#parameter-x-amz-tagging"><code>x-amz-tagging</code></a></td>
    <td>Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule. Requires permission to access the CreateTopicRule action.</td>
</tr>
<tr>
    <td><a href="#replace_topic_rule"><CopyableCode code="replace_topic_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-topicRulePayload"><code>topicRulePayload</code></a></td>
    <td></td>
    <td>Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule. Requires permission to access the ReplaceTopicRule action.</td>
</tr>
<tr>
    <td><a href="#delete_topic_rule"><CopyableCode code="delete_topic_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the rule. Requires permission to access the DeleteTopicRule action.</td>
</tr>
<tr>
    <td><a href="#confirm_topic_rule_destination"><CopyableCode code="confirm_topic_rule_destination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-confirmation_token"><code>confirmation_token</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling ConfirmTopicRuleDestination to confirm that you own or have access to the endpoint. Requires permission to access the ConfirmTopicRuleDestination action.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-confirmation_token">
    <td><CopyableCode code="confirmation_token" /></td>
    <td><code>string</code></td>
    <td>The token used to confirm ownership or access to the topic rule confirmation URL.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-rule_name">
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-ruleDisabled">
    <td><CopyableCode code="ruleDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the rule is disabled.</td>
</tr>
<tr id="parameter-topic">
    <td><CopyableCode code="topic" /></td>
    <td><code>string</code></td>
    <td>The topic.</td>
</tr>
<tr id="parameter-x-amz-tagging">
    <td><CopyableCode code="x-amz-tagging" /></td>
    <td><code>string</code></td>
    <td>Metadata which can be used to manage the topic rule. For URI Request parameters use format: ...key1=value1&key2=value2... For the CLI command-line parameter use format: --tags "key1=value1&key2=value2..." For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_topic_rule"
    values={[
        { label: 'get_topic_rule', value: 'get_topic_rule' },
        { label: 'list_topic_rules', value: 'list_topic_rules' }
    ]}
>
<TabItem value="get_topic_rule">

Gets information about the rule. Requires permission to access the GetTopicRule action.

```sql
SELECT
rule,
rule_arn
FROM aws.iot.topic_rules
WHERE rule_name = '{{ rule_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_topic_rules">

Lists the rules for the specific topic. Requires permission to access the ListTopicRules action.

```sql
SELECT
created_at,
rule_arn,
rule_disabled,
rule_name,
topic_pattern
FROM aws.iot.topic_rules
WHERE region = '{{ region }}' -- required
AND topic = '{{ topic }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND ruleDisabled = '{{ ruleDisabled }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_topic_rule"
    values={[
        { label: 'create_topic_rule', value: 'create_topic_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_topic_rule">

Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule. Requires permission to access the CreateTopicRule action.

```sql
INSERT INTO aws.iot.topic_rules (
topicRulePayload,
rule_name,
region,
`x-amz-tagging`
)
SELECT 
'{{ topicRulePayload }}' /* required */,
'{{ rule_name }}',
'{{ region }}',
'{{ x-amz-tagging }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
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
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_topic_rule"
    values={[
        { label: 'replace_topic_rule', value: 'replace_topic_rule' }
    ]}
>
<TabItem value="replace_topic_rule">

Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule. Requires permission to access the ReplaceTopicRule action.

```sql
REPLACE aws.iot.topic_rules
SET 
topicRulePayload = '{{ topicRulePayload }}'
WHERE 
rule_name = '{{ rule_name }}' --required
AND region = '{{ region }}' --required
AND topicRulePayload = '{{ topicRulePayload }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_topic_rule"
    values={[
        { label: 'delete_topic_rule', value: 'delete_topic_rule' }
    ]}
>
<TabItem value="delete_topic_rule">

Deletes the rule. Requires permission to access the DeleteTopicRule action.

```sql
DELETE FROM aws.iot.topic_rules
WHERE rule_name = '{{ rule_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="confirm_topic_rule_destination"
    values={[
        { label: 'confirm_topic_rule_destination', value: 'confirm_topic_rule_destination' }
    ]}
>
<TabItem value="confirm_topic_rule_destination">

Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling ConfirmTopicRuleDestination to confirm that you own or have access to the endpoint. Requires permission to access the ConfirmTopicRuleDestination action.

```sql
EXEC aws.iot.topic_rules.confirm_topic_rule_destination 
@confirmation_token='{{ confirmation_token }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
