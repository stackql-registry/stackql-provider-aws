--- 
title: alarm_models
hide_title: false
hide_table_of_contents: false
keywords:
  - alarm_models
  - iotevents
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

Creates, updates, deletes, gets or lists an <code>alarm_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alarm_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotevents.alarm_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_alarm_model"
    values={[
        { label: 'describe_alarm_model', value: 'describe_alarm_model' },
        { label: 'list_alarm_models', value: 'list_alarm_models' }
    ]}
>
<TabItem value="describe_alarm_model">

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
    <td><CopyableCode code="alarmCapabilities" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration information of alarm state changes.</td>
</tr>
<tr>
    <td><CopyableCode code="alarmEventActions" /></td>
    <td><code>object</code></td>
    <td>Contains information about one or more alarm actions.</td>
</tr>
<tr>
    <td><CopyableCode code="alarmModelArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the alarm model. For more information, see Amazon Resource Names (ARNs) in the AWS General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="alarmModelDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the alarm model.</td>
</tr>
<tr>
    <td><CopyableCode code="alarmModelName" /></td>
    <td><code>string</code></td>
    <td>The name of the alarm model. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="alarmModelVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the alarm model.</td>
</tr>
<tr>
    <td><CopyableCode code="alarmNotification" /></td>
    <td><code>object</code></td>
    <td>Contains information about one or more notification actions.</td>
</tr>
<tr>
    <td><CopyableCode code="alarmRule" /></td>
    <td><code>object</code></td>
    <td>Defines when your alarm is invoked.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the alarm model was created, in the Unix epoch format.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>An input attribute used as a key to create an alarm. AWS IoT Events routes inputs associated with this key to the alarm. (pattern: &lt;code&gt;^((`&#91;\w\- &#93;+`)|(&#91;\w\-&#93;+))(\.((`&#91;\w- &#93;+`)|(&#91;\w\-&#93;+)))*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the alarm model was last updated, in the Unix epoch format.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see Amazon Resource Names (ARNs) in the AWS General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>integer</code></td>
    <td>A non-negative integer that reflects the severity level of the alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the alarm model. The status can be one of the following values: ACTIVE - The alarm model is active and it's ready to evaluate data. ACTIVATING - AWS IoT Events is activating your alarm model. Activating an alarm model can take up to a few minutes. INACTIVE - The alarm model is inactive, so it isn't ready to evaluate data. Check your alarm model information and update the alarm model. FAILED - You couldn't create or update the alarm model. Check your alarm model information and try again. (ACTIVE, ACTIVATING, INACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Contains information about the status of the alarm model.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_alarm_models">

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
    <td><CopyableCode code="alarmModelSummaries" /></td>
    <td><code>array</code></td>
    <td>A list that summarizes each alarm model.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results, or null if there are no more results.</td>
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
    <td><a href="#describe_alarm_model"><CopyableCode code="describe_alarm_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-alarm_model_name"><code>alarm_model_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Retrieves information about an alarm model. If you don't specify a value for the alarmModelVersion parameter, the latest version is returned.</td>
</tr>
<tr>
    <td><a href="#list_alarm_models"><CopyableCode code="list_alarm_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.</td>
</tr>
<tr>
    <td><a href="#create_alarm_model"><CopyableCode code="create_alarm_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-alarmModelName"><code>alarmModelName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-alarmRule"><code>alarmRule</code></a></td>
    <td></td>
    <td>Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see Create an alarm model in the AWS IoT Events Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_alarm_model"><CopyableCode code="update_alarm_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-alarm_model_name"><code>alarm_model_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-alarmRule"><code>alarmRule</code></a></td>
    <td></td>
    <td>Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.</td>
</tr>
<tr>
    <td><a href="#delete_alarm_model"><CopyableCode code="delete_alarm_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-alarm_model_name"><code>alarm_model_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.</td>
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
<tr id="parameter-alarm_model_name">
    <td><CopyableCode code="alarm_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the alarm model.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the alarm model.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_alarm_model"
    values={[
        { label: 'describe_alarm_model', value: 'describe_alarm_model' },
        { label: 'list_alarm_models', value: 'list_alarm_models' }
    ]}
>
<TabItem value="describe_alarm_model">

Retrieves information about an alarm model. If you don't specify a value for the alarmModelVersion parameter, the latest version is returned.

```sql
SELECT
alarmCapabilities,
alarmEventActions,
alarmModelArn,
alarmModelDescription,
alarmModelName,
alarmModelVersion,
alarmNotification,
alarmRule,
creationTime,
key,
lastUpdateTime,
roleArn,
severity,
status,
statusMessage
FROM aws.iotevents.alarm_models
WHERE alarm_model_name = '{{ alarm_model_name }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list_alarm_models">

Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.

```sql
SELECT
alarmModelSummaries,
nextToken
FROM aws.iotevents.alarm_models
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_alarm_model"
    values={[
        { label: 'create_alarm_model', value: 'create_alarm_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_alarm_model">

Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see Create an alarm model in the AWS IoT Events Developer Guide.

```sql
INSERT INTO aws.iotevents.alarm_models (
alarmModelName,
alarmModelDescription,
roleArn,
tags,
key,
severity,
alarmRule,
alarmNotification,
alarmEventActions,
alarmCapabilities,
region
)
SELECT 
'{{ alarmModelName }}' /* required */,
'{{ alarmModelDescription }}',
'{{ roleArn }}' /* required */,
'{{ tags }}',
'{{ key }}',
{{ severity }},
'{{ alarmRule }}' /* required */,
'{{ alarmNotification }}',
'{{ alarmEventActions }}',
'{{ alarmCapabilities }}',
'{{ region }}'
RETURNING
alarmModelArn,
alarmModelVersion,
creationTime,
lastUpdateTime,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alarm_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the alarm_models resource.
    - name: alarmModelName
      value: "{{ alarmModelName }}"
    - name: alarmModelDescription
      value: "{{ alarmModelDescription }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: key
      value: "{{ key }}"
    - name: severity
      value: {{ severity }}
    - name: alarmRule
      description: |
        Defines when your alarm is invoked.
      value:
        simpleRule:
          inputProperty: "{{ inputProperty }}"
          comparisonOperator: "{{ comparisonOperator }}"
          threshold: "{{ threshold }}"
    - name: alarmNotification
      description: |
        Contains information about one or more notification actions.
      value:
        notificationActions:
          - action:
              lambdaAction:
                functionArn: "{{ functionArn }}"
                payload:
                  contentExpression: "{{ contentExpression }}"
                  type_: "{{ type_ }}"
            smsConfigurations: "{{ smsConfigurations }}"
            emailConfigurations: "{{ emailConfigurations }}"
    - name: alarmEventActions
      description: |
        Contains information about one or more alarm actions.
      value:
        alarmActions:
          - sns:
              targetArn: "{{ targetArn }}"
              payload:
                contentExpression: "{{ contentExpression }}"
                type_: "{{ type_ }}"
            iotTopicPublish:
              mqttTopic: "{{ mqttTopic }}"
              payload:
                contentExpression: "{{ contentExpression }}"
                type_: "{{ type_ }}"
            lambda:
              functionArn: "{{ functionArn }}"
              payload:
                contentExpression: "{{ contentExpression }}"
                type_: "{{ type_ }}"
            iotEvents:
              inputName: "{{ inputName }}"
              payload:
                contentExpression: "{{ contentExpression }}"
                type_: "{{ type_ }}"
            sqs:
              queueUrl: "{{ queueUrl }}"
              useBase64: {{ useBase64 }}
              payload:
                contentExpression: "{{ contentExpression }}"
                type_: "{{ type_ }}"
            firehose:
              deliveryStreamName: "{{ deliveryStreamName }}"
              separator: "{{ separator }}"
              payload:
                contentExpression: "{{ contentExpression }}"
                type_: "{{ type_ }}"
            dynamoDB:
              hashKeyType: "{{ hashKeyType }}"
              hashKeyField: "{{ hashKeyField }}"
              hashKeyValue: "{{ hashKeyValue }}"
              rangeKeyType: "{{ rangeKeyType }}"
              rangeKeyField: "{{ rangeKeyField }}"
              rangeKeyValue: "{{ rangeKeyValue }}"
              operation: "{{ operation }}"
              payloadField: "{{ payloadField }}"
              tableName: "{{ tableName }}"
              payload:
                contentExpression: "{{ contentExpression }}"
                type_: "{{ type_ }}"
            dynamoDBv2:
              tableName: "{{ tableName }}"
              payload:
                contentExpression: "{{ contentExpression }}"
                type_: "{{ type_ }}"
            iotSiteWise:
              entryId: "{{ entryId }}"
              assetId: "{{ assetId }}"
              propertyId: "{{ propertyId }}"
              propertyAlias: "{{ propertyAlias }}"
              propertyValue:
                value:
                  stringValue: "{{ stringValue }}"
                  integerValue: "{{ integerValue }}"
                  doubleValue: "{{ doubleValue }}"
                  booleanValue: "{{ booleanValue }}"
                timestamp:
                  timeInSeconds: "{{ timeInSeconds }}"
                  offsetInNanos: "{{ offsetInNanos }}"
                quality: "{{ quality }}"
    - name: alarmCapabilities
      description: |
        Contains the configuration information of alarm state changes.
      value:
        initializationConfiguration:
          disabledOnInitialization: {{ disabledOnInitialization }}
        acknowledgeFlow:
          enabled: {{ enabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_alarm_model"
    values={[
        { label: 'update_alarm_model', value: 'update_alarm_model' }
    ]}
>
<TabItem value="update_alarm_model">

Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.

```sql
UPDATE aws.iotevents.alarm_models
SET 
alarmModelDescription = '{{ alarmModelDescription }}',
roleArn = '{{ roleArn }}',
severity = {{ severity }},
alarmRule = '{{ alarmRule }}',
alarmNotification = '{{ alarmNotification }}',
alarmEventActions = '{{ alarmEventActions }}',
alarmCapabilities = '{{ alarmCapabilities }}'
WHERE 
alarm_model_name = '{{ alarm_model_name }}' --required
AND region = '{{ region }}' --required
AND roleArn = '{{ roleArn }}' --required
AND alarmRule = '{{ alarmRule }}' --required
RETURNING
alarmModelArn,
alarmModelVersion,
creationTime,
lastUpdateTime,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alarm_model"
    values={[
        { label: 'delete_alarm_model', value: 'delete_alarm_model' }
    ]}
>
<TabItem value="delete_alarm_model">

Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.

```sql
DELETE FROM aws.iotevents.alarm_models
WHERE alarm_model_name = '{{ alarm_model_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
