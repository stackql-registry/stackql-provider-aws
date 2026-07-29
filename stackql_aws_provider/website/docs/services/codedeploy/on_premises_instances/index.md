--- 
title: on_premises_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - on_premises_instances
  - codedeploy
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

Creates, updates, deletes, gets or lists an <code>on_premises_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_premises_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.on_premises_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_on_premises_instances"
    values={[
        { label: 'batch_get_on_premises_instances', value: 'batch_get_on_premises_instances' },
        { label: 'get_on_premises_instance', value: 'get_on_premises_instance' },
        { label: 'list_on_premises_instances', value: 'list_on_premises_instances' }
    ]}
>
<TabItem value="batch_get_on_premises_instances">

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
    <td><CopyableCode code="instance_infos" /></td>
    <td><code>array</code></td>
    <td>Information about the on-premises instances.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_on_premises_instance">

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
    <td><CopyableCode code="deregister_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>If the on-premises instance was deregistered, the time at which the on-premises instance was deregistered.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_session_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM session associated with the on-premises instance.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_user_arn" /></td>
    <td><code>string</code></td>
    <td>The user ARN associated with the on-premises instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the on-premises instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_name" /></td>
    <td><code>string</code></td>
    <td>The name of the on-premises instance.</td>
</tr>
<tr>
    <td><CopyableCode code="register_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the on-premises instance was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags currently associated with the on-premises instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_on_premises_instances">

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
    <td><CopyableCode code="instance_name" /></td>
    <td><code>string</code></td>
    <td>The list of matching on-premises instance names.</td>
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
    <td><a href="#batch_get_on_premises_instances"><CopyableCode code="batch_get_on_premises_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.</td>
</tr>
<tr>
    <td><a href="#get_on_premises_instance"><CopyableCode code="get_on_premises_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an on-premises instance.</td>
</tr>
<tr>
    <td><a href="#list_on_premises_instances"><CopyableCode code="list_on_premises_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of names for one or more on-premises instances. Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</td>
</tr>
<tr>
    <td><a href="#register_on_premises_instance"><CopyableCode code="register_on_premises_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Registers an on-premises instance. Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</td>
</tr>
<tr>
    <td><a href="#deregister_on_premises_instance"><CopyableCode code="deregister_on_premises_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters an on-premises instance.</td>
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
    defaultValue="batch_get_on_premises_instances"
    values={[
        { label: 'batch_get_on_premises_instances', value: 'batch_get_on_premises_instances' },
        { label: 'get_on_premises_instance', value: 'get_on_premises_instance' },
        { label: 'list_on_premises_instances', value: 'list_on_premises_instances' }
    ]}
>
<TabItem value="batch_get_on_premises_instances">

Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.

```sql
SELECT
instance_infos
FROM aws.codedeploy.on_premises_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_on_premises_instance">

Gets information about an on-premises instance.

```sql
SELECT
deregister_time,
iam_session_arn,
iam_user_arn,
instance_arn,
instance_name,
register_time,
tags
FROM aws.codedeploy.on_premises_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_on_premises_instances">

Gets a list of names for one or more on-premises instances. Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.

```sql
SELECT
instance_name
FROM aws.codedeploy.on_premises_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_on_premises_instance"
    values={[
        { label: 'register_on_premises_instance', value: 'register_on_premises_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_on_premises_instance">

Registers an on-premises instance. Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.

```sql
INSERT INTO aws.codedeploy.on_premises_instances (
instanceName,
iamSessionArn,
iamUserArn,
region
)
SELECT 
'{{ instanceName }}' /* required */,
'{{ iamSessionArn }}',
'{{ iamUserArn }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: on_premises_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the on_premises_instances resource.
    - name: instanceName
      value: "{{ instanceName }}"
      description: |
        The name of the on-premises instance to register.
    - name: iamSessionArn
      value: "{{ iamSessionArn }}"
      description: |
        The ARN of the IAM session to associate with the on-premises instance.
    - name: iamUserArn
      value: "{{ iamUserArn }}"
      description: |
        The ARN of the user to associate with the on-premises instance.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_on_premises_instance"
    values={[
        { label: 'deregister_on_premises_instance', value: 'deregister_on_premises_instance' }
    ]}
>
<TabItem value="deregister_on_premises_instance">

Deregisters an on-premises instance.

```sql
DELETE FROM aws.codedeploy.on_premises_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
