--- 
title: activity_types
hide_title: false
hide_table_of_contents: false
keywords:
  - activity_types
  - swf
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

Creates, updates, deletes, gets or lists an <code>activity_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="activity_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.swf.activity_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_activity_type"
    values={[
        { label: 'describe_activity_type', value: 'describe_activity_type' },
        { label: 'list_activity_types', value: 'list_activity_types' }
    ]}
>
<TabItem value="describe_activity_type">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration settings registered with the activity type.</td>
</tr>
<tr>
    <td><CopyableCode code="type_info" /></td>
    <td><code>object</code></td>
    <td>General information about the activity type. The status of activity type (returned in the ActivityTypeInfo structure) can be one of the following. REGISTERED – The type is registered and available. Workers supporting this type should be running. DEPRECATED – The type was deprecated using DeprecateActivityType, but is still in use. You should keep workers supporting this type running. You cannot create new tasks of this type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_activity_types">

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
    <td><CopyableCode code="activity_type" /></td>
    <td><code>object</code></td>
    <td>The ActivityType type structure representing the activity type.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time this activity type was created through RegisterActivityType.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>If DEPRECATED, the date and time DeprecateActivityType was called.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the activity type provided in RegisterActivityType.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the activity type. (REGISTERED, DEPRECATED)</td>
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
    <td><a href="#describe_activity_type"><CopyableCode code="describe_activity_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_activity_types"><CopyableCode code="list_activity_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#register_activity_type"><CopyableCode code="register_activity_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Registers a new activity type along with its configuration settings in the specified domain. A TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_activity_type"><CopyableCode code="delete_activity_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified activity type. Note: Prior to deletion, activity types must first be deprecated. After an activity type has been deleted, you cannot schedule new activities of that type. Activities that started before the type was deleted will continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
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
    defaultValue="describe_activity_type"
    values={[
        { label: 'describe_activity_type', value: 'describe_activity_type' },
        { label: 'list_activity_types', value: 'list_activity_types' }
    ]}
>
<TabItem value="describe_activity_type">

Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
SELECT
configuration,
type_info
FROM aws.swf.activity_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_activity_types">

Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
SELECT
activity_type,
creation_date,
deprecation_date,
description,
status
FROM aws.swf.activity_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_activity_type"
    values={[
        { label: 'register_activity_type', value: 'register_activity_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_activity_type">

Registers a new activity type along with its configuration settings in the specified domain. A TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
INSERT INTO aws.swf.activity_types (
domain,
name,
version,
description,
defaultTaskStartToCloseTimeout,
defaultTaskHeartbeatTimeout,
defaultTaskList,
defaultTaskPriority,
defaultTaskScheduleToStartTimeout,
defaultTaskScheduleToCloseTimeout,
region
)
SELECT 
'{{ domain }}' /* required */,
'{{ name }}' /* required */,
'{{ version }}' /* required */,
'{{ description }}',
'{{ defaultTaskStartToCloseTimeout }}',
'{{ defaultTaskHeartbeatTimeout }}',
'{{ defaultTaskList }}',
'{{ defaultTaskPriority }}',
'{{ defaultTaskScheduleToStartTimeout }}',
'{{ defaultTaskScheduleToCloseTimeout }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: activity_types
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the activity_types resource.
    - name: domain
      value: "{{ domain }}"
      description: |
        The name of the domain in which this activity is to be registered.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the activity type within the domain. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn.
    - name: version
      value: "{{ version }}"
      description: |
        The version of the activity type. The activity type consists of the name and version, the combination of which must be unique within the domain. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn.
    - name: description
      value: "{{ description }}"
      description: |
        A textual description of the activity type.
    - name: defaultTaskStartToCloseTimeout
      value: "{{ defaultTaskStartToCloseTimeout }}"
      description: |
        If set, specifies the default maximum duration that a worker can take to process tasks of this activity type. This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    - name: defaultTaskHeartbeatTimeout
      value: "{{ defaultTaskHeartbeatTimeout }}"
      description: |
        If set, specifies the default maximum time before which a worker processing a task of this type must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. If the activity worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an UnknownResource fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity worker should clean up the activity task. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    - name: defaultTaskList
      description: |
        Represents a task list.
      value:
        name: "{{ name }}"
    - name: defaultTaskPriority
      value: "{{ defaultTaskPriority }}"
      description: |
        The default task priority to assign to the activity type. If not assigned, then 0 is used. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the in the Amazon SWF Developer Guide..
    - name: defaultTaskScheduleToStartTimeout
      value: "{{ defaultTaskScheduleToStartTimeout }}"
      description: |
        If set, specifies the default maximum duration that a task of this activity type can wait before being assigned to a worker. This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    - name: defaultTaskScheduleToCloseTimeout
      value: "{{ defaultTaskScheduleToCloseTimeout }}"
      description: |
        If set, specifies the default maximum duration for a task of this activity type. This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_activity_type"
    values={[
        { label: 'delete_activity_type', value: 'delete_activity_type' }
    ]}
>
<TabItem value="delete_activity_type">

Deletes the specified activity type. Note: Prior to deletion, activity types must first be deprecated. After an activity type has been deleted, you cannot schedule new activities of that type. Activities that started before the type was deleted will continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
DELETE FROM aws.swf.activity_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
