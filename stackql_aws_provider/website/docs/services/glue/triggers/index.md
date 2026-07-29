--- 
title: triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - triggers
  - glue
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

Creates, updates, deletes, gets or lists a <code>triggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="triggers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.triggers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_triggers"
    values={[
        { label: 'batch_get_triggers', value: 'batch_get_triggers' },
        { label: 'get_trigger', value: 'get_trigger' }
    ]}
>
<TabItem value="batch_get_triggers">

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
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>A list of trigger definitions.</td>
</tr>
<tr>
    <td><CopyableCode code="triggers_not_found" /></td>
    <td><code>array</code></td>
    <td>A list of names of triggers not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_trigger">

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
    <td>The actions initiated by this trigger.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this trigger. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_batching_condition" /></td>
    <td><code>object</code></td>
    <td>Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the trigger. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="predicate" /></td>
    <td><code>object</code></td>
    <td>The predicate of this trigger, which defines when it will fire.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the trigger. (CREATING, CREATED, ACTIVATING, ACTIVATED, DEACTIVATING, DEACTIVATED, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of trigger that this is. (SCHEDULED, CONDITIONAL, ON_DEMAND, EVENT)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow associated with the trigger. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#batch_get_triggers"><CopyableCode code="batch_get_triggers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of resource metadata for a given list of trigger names. After calling the ListTriggers operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</td>
</tr>
<tr>
    <td><a href="#get_trigger"><CopyableCode code="get_trigger" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the definition of a trigger.</td>
</tr>
<tr>
    <td><a href="#create_trigger"><CopyableCode code="create_trigger" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new trigger. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to keep them within the Job.</td>
</tr>
<tr>
    <td><a href="#update_trigger"><CopyableCode code="update_trigger" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TriggerUpdate"><code>TriggerUpdate</code></a></td>
    <td></td>
    <td>Updates a trigger definition. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to keep them within the Job.</td>
</tr>
<tr>
    <td><a href="#delete_trigger"><CopyableCode code="delete_trigger" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified trigger. If the trigger is not found, no exception is thrown.</td>
</tr>
<tr>
    <td><a href="#get_triggers"><CopyableCode code="get_triggers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all the triggers associated with a job.</td>
</tr>
<tr>
    <td><a href="#list_triggers"><CopyableCode code="list_triggers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_triggers"
    values={[
        { label: 'batch_get_triggers', value: 'batch_get_triggers' },
        { label: 'get_trigger', value: 'get_trigger' }
    ]}
>
<TabItem value="batch_get_triggers">

Returns a list of resource metadata for a given list of trigger names. After calling the ListTriggers operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.

```sql
SELECT
triggers,
triggers_not_found
FROM aws.glue.triggers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_trigger">

Retrieves the definition of a trigger.

```sql
SELECT
actions,
description,
event_batching_condition,
id,
name,
predicate,
schedule,
state,
type,
workflow_name
FROM aws.glue.triggers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trigger"
    values={[
        { label: 'create_trigger', value: 'create_trigger' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trigger">

Creates a new trigger. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to keep them within the Job.

```sql
INSERT INTO aws.glue.triggers (
Name,
WorkflowName,
Type,
Schedule,
Predicate,
Actions,
Description,
StartOnCreation,
Tags,
EventBatchingCondition,
region
)
SELECT 
'{{ Name }}',
'{{ WorkflowName }}',
'{{ Type }}',
'{{ Schedule }}',
'{{ Predicate }}',
'{{ Actions }}',
'{{ Description }}',
{{ StartOnCreation }},
'{{ Tags }}',
'{{ EventBatchingCondition }}',
'{{ region }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: triggers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the triggers resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the trigger.
    - name: WorkflowName
      value: "{{ WorkflowName }}"
      description: |
        The name of the workflow associated with the trigger.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of the new trigger.
      valid_values: ['SCHEDULED', 'CONDITIONAL', 'ON_DEMAND', 'EVENT']
    - name: Schedule
      value: "{{ Schedule }}"
      description: |
        A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *). This field is required when the trigger type is SCHEDULED.
    - name: Predicate
      description: |
        A predicate to specify when the new trigger should fire. This field is required when the trigger type is CONDITIONAL.
      value:
        Logical: "{{ Logical }}"
        Conditions:
          - LogicalOperator: "{{ LogicalOperator }}"
            JobName: "{{ JobName }}"
            State: "{{ State }}"
            CrawlerName: "{{ CrawlerName }}"
            CrawlState: "{{ CrawlState }}"
    - name: Actions
      description: |
        The actions initiated by this trigger when it fires.
      value:
        - JobName: "{{ JobName }}"
          Arguments: "{{ Arguments }}"
          Timeout: {{ Timeout }}
          SecurityConfiguration: "{{ SecurityConfiguration }}"
          NotificationProperty:
            NotifyDelayAfter: {{ NotifyDelayAfter }}
          CrawlerName: "{{ CrawlerName }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the new trigger.
    - name: StartOnCreation
      value: {{ StartOnCreation }}
      description: |
        Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to use with this trigger. You may use tags to limit access to the trigger. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide.
    - name: EventBatchingCondition
      description: |
        Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
      value:
        BatchSize: {{ BatchSize }}
        BatchWindow: {{ BatchWindow }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_trigger"
    values={[
        { label: 'update_trigger', value: 'update_trigger' }
    ]}
>
<TabItem value="update_trigger">

Updates a trigger definition. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to keep them within the Job.

```sql
UPDATE aws.glue.triggers
SET 
Name = '{{ Name }}',
TriggerUpdate = '{{ TriggerUpdate }}'
WHERE 
region = '{{ region }}' --required
AND TriggerUpdate = '{{ TriggerUpdate }}' --required
RETURNING
trigger;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trigger"
    values={[
        { label: 'delete_trigger', value: 'delete_trigger' }
    ]}
>
<TabItem value="delete_trigger">

Deletes a specified trigger. If the trigger is not found, no exception is thrown.

```sql
DELETE FROM aws.glue.triggers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_triggers"
    values={[
        { label: 'get_triggers', value: 'get_triggers' },
        { label: 'list_triggers', value: 'list_triggers' }
    ]}
>
<TabItem value="get_triggers">

Gets all the triggers associated with a job.

```sql
EXEC aws.glue.triggers.get_triggers 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"DependentJobName": "{{ DependentJobName }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
<TabItem value="list_triggers">

Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.

```sql
EXEC aws.glue.triggers.list_triggers 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"DependentJobName": "{{ DependentJobName }}", 
"MaxResults": {{ MaxResults }}, 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
