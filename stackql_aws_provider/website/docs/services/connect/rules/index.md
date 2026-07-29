--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - connect
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rule"
    values={[
        { label: 'describe_rule', value: 'describe_rule' },
        { label: 'list_rules', value: 'list_rules' }
    ]}
>
<TabItem value="describe_rule">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>A list of actions to be run when the rule is triggered.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>The conditions of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for the when the rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="publish_status" /></td>
    <td><code>string</code></td>
    <td>The publish status of the rule. (DRAFT, PUBLISHED)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_event_source" /></td>
    <td><code>object</code></td>
    <td>The name of the event source. This field is required if TriggerEventSource is one of the following values: OnZendeskTicketCreate | OnZendeskTicketStatusUpdate | OnSalesforceCaseCreate | OnContactEvaluationSubmit | OnMetricDataUpdate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rules">

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
    <td><CopyableCode code="action_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of ActionTypes associated with a rule.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="event_source_name" /></td>
    <td><code>string</code></td>
    <td>The name of the event source. (OnPostCallAnalysisAvailable, OnRealTimeCallAnalysisAvailable, OnRealTimeChatAnalysisAvailable, OnPostChatAnalysisAvailable, OnEmailAnalysisAvailable, OnZendeskTicketCreate, OnZendeskTicketStatusUpdate, OnSalesforceCaseCreate, OnContactEvaluationSubmit, OnMetricDataUpdate, OnCaseCreate, OnCaseUpdate, OnSlaBreach, OnAlertUpdate, OnSchedulePublish, OnScheduleUpdate, OnScheduleTimeOffRequestActivity)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="publish_status" /></td>
    <td><code>string</code></td>
    <td>The publish status of the rule. (DRAFT, PUBLISHED)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the rule.</td>
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
    <td><a href="#describe_rule"><CopyableCode code="describe_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a rule for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#list_rules"><CopyableCode code="list_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-publishStatus"><code>publishStatus</code></a>, <a href="#parameter-eventSourceName"><code>eventSourceName</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List all rules for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#create_rule"><CopyableCode code="create_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TriggerEventSource"><code>TriggerEventSource</code></a>, <a href="#parameter-Function"><code>Function</code></a>, <a href="#parameter-Actions"><code>Actions</code></a>, <a href="#parameter-PublishStatus"><code>PublishStatus</code></a></td>
    <td></td>
    <td>Creates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule.</td>
</tr>
<tr>
    <td><a href="#update_rule"><CopyableCode code="update_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Function"><code>Function</code></a>, <a href="#parameter-Actions"><code>Actions</code></a>, <a href="#parameter-PublishStatus"><code>PublishStatus</code></a></td>
    <td></td>
    <td>Updates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule.</td>
</tr>
<tr>
    <td><a href="#delete_rule"><CopyableCode code="delete_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a rule for the specified Amazon Connect instance.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the rule.</td>
</tr>
<tr id="parameter-eventSourceName">
    <td><CopyableCode code="eventSourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the event source.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-publishStatus">
    <td><CopyableCode code="publishStatus" /></td>
    <td><code>string</code></td>
    <td>The publish status of the rule.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_rule"
    values={[
        { label: 'describe_rule', value: 'describe_rule' },
        { label: 'list_rules', value: 'list_rules' }
    ]}
>
<TabItem value="describe_rule">

Describes a rule for the specified Amazon Connect instance.

```sql
SELECT
actions,
created_time,
function,
last_updated_by,
last_updated_time,
name,
publish_status,
rule_arn,
rule_id,
tags,
trigger_event_source
FROM aws.connect.rules
WHERE instance_id = '{{ instance_id }}' -- required
AND rule_id = '{{ rule_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rules">

List all rules for the specified Amazon Connect instance.

```sql
SELECT
action_summaries,
created_time,
event_source_name,
last_updated_time,
name,
publish_status,
rule_arn,
rule_id
FROM aws.connect.rules
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND publishStatus = '{{ publishStatus }}'
AND eventSourceName = '{{ eventSourceName }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule"
    values={[
        { label: 'create_rule', value: 'create_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule">

Creates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule.

```sql
INSERT INTO aws.connect.rules (
Name,
TriggerEventSource,
Function,
Actions,
PublishStatus,
ClientToken,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ TriggerEventSource }}' /* required */,
'{{ Function }}' /* required */,
'{{ Actions }}' /* required */,
'{{ PublishStatus }}' /* required */,
'{{ ClientToken }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
rule_arn,
rule_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rules resource.
    - name: Name
      value: "{{ Name }}"
    - name: TriggerEventSource
      description: |
        The name of the event source. This field is required if TriggerEventSource is one of the following values: OnZendeskTicketCreate | OnZendeskTicketStatusUpdate | OnSalesforceCaseCreate | OnContactEvaluationSubmit | OnMetricDataUpdate.
      value:
        EventSourceName: "{{ EventSourceName }}"
        IntegrationAssociationId: "{{ IntegrationAssociationId }}"
    - name: Function
      value: "{{ Function }}"
    - name: Actions
      value:
        - ActionType: "{{ ActionType }}"
          TaskAction:
            Name: "{{ Name }}"
            Description: "{{ Description }}"
            ContactFlowId: "{{ ContactFlowId }}"
            References: "{{ References }}"
          EventBridgeAction:
            Name: "{{ Name }}"
          AssignContactCategoryAction: "{{ AssignContactCategoryAction }}"
          SendNotificationAction:
            DeliveryMethod: "{{ DeliveryMethod }}"
            Subject: "{{ Subject }}"
            Content: "{{ Content }}"
            ContentType: "{{ ContentType }}"
            Recipient:
              UserTags: "{{ UserTags }}"
              UserIds:
                - "{{ UserIds }}"
            Exclusion:
              UserTags: "{{ UserTags }}"
              UserIds:
                - "{{ UserIds }}"
          CreateCaseAction:
            Fields:
              - Id: "{{ Id }}"
                Value:
                  BooleanValue: {{ BooleanValue }}
                  DoubleValue: {{ DoubleValue }}
                  EmptyValue: "{{ EmptyValue }}"
                  StringValue: "{{ StringValue }}"
            TemplateId: "{{ TemplateId }}"
          UpdateCaseAction:
            Fields:
              - Id: "{{ Id }}"
                Value:
                  BooleanValue: {{ BooleanValue }}
                  DoubleValue: {{ DoubleValue }}
                  EmptyValue: "{{ EmptyValue }}"
                  StringValue: "{{ StringValue }}"
          AssignSlaAction:
            SlaAssignmentType: "{{ SlaAssignmentType }}"
            CaseSlaConfiguration:
              Name: "{{ Name }}"
              Type: "{{ Type }}"
              FieldId: "{{ FieldId }}"
              TargetFieldValues:
                - BooleanValue: {{ BooleanValue }}
                  DoubleValue: {{ DoubleValue }}
                  EmptyValue: "{{ EmptyValue }}"
                  StringValue: "{{ StringValue }}"
              TargetSlaMinutes: {{ TargetSlaMinutes }}
          EndAssociatedTasksAction: "{{ EndAssociatedTasksAction }}"
          SubmitAutoEvaluationAction:
            EvaluationFormId: "{{ EvaluationFormId }}"
    - name: PublishStatus
      value: "{{ PublishStatus }}"
      valid_values: ['DRAFT', 'PUBLISHED']
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule"
    values={[
        { label: 'update_rule', value: 'update_rule' }
    ]}
>
<TabItem value="update_rule">

Updates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule.

```sql
UPDATE aws.connect.rules
SET 
Name = '{{ Name }}',
Function = '{{ Function }}',
Actions = '{{ Actions }}',
PublishStatus = '{{ PublishStatus }}'
WHERE 
rule_id = '{{ rule_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND Function = '{{ Function }}' --required
AND Actions = '{{ Actions }}' --required
AND PublishStatus = '{{ PublishStatus }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule"
    values={[
        { label: 'delete_rule', value: 'delete_rule' }
    ]}
>
<TabItem value="delete_rule">

Deletes a rule for the specified Amazon Connect instance.

```sql
DELETE FROM aws.connect.rules
WHERE instance_id = '{{ instance_id }}' --required
AND rule_id = '{{ rule_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
