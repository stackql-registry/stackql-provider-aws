--- 
title: frameworks
hide_title: false
hide_table_of_contents: false
keywords:
  - frameworks
  - backup
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

Creates, updates, deletes, gets or lists a <code>frameworks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="frameworks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.frameworks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_framework"
    values={[
        { label: 'describe_framework', value: 'describe_framework' },
        { label: 'list_frameworks', value: 'list_frameworks' }
    ]}
>
<TabItem value="describe_framework">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a framework is created, in ISO 8601 representation. The value of CreationTime is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStatus" /></td>
    <td><code>string</code></td>
    <td>The deployment status of a framework. The statuses are: CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED</td>
</tr>
<tr>
    <td><CopyableCode code="FrameworkArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="FrameworkControls" /></td>
    <td><code>array</code></td>
    <td>The controls that make up the framework. Each control in the list has a name, input parameters, and scope.</td>
</tr>
<tr>
    <td><CopyableCode code="FrameworkDescription" /></td>
    <td><code>string</code></td>
    <td>An optional description of the framework. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FrameworkName" /></td>
    <td><code>string</code></td>
    <td>The unique name of a framework. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;_a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FrameworkStatus" /></td>
    <td><code>string</code></td>
    <td>A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn Config recording on or off for each resource. The statuses are: ACTIVE when recording is turned on for all resources governed by the framework. PARTIALLY_ACTIVE when recording is turned off for at least one resource governed by the framework. INACTIVE when recording is turned off for all resources governed by the framework. UNAVAILABLE when Backup is unable to validate recording status at this time.</td>
</tr>
<tr>
    <td><CopyableCode code="IdempotencyToken" /></td>
    <td><code>string</code></td>
    <td>A customer-chosen string that you can use to distinguish between otherwise identical calls to DescribeFrameworkOutput. Retrying a successful request with the same idempotency token results in a success message with no action taken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_frameworks">

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
    <td><CopyableCode code="Frameworks" /></td>
    <td><code>array</code></td>
    <td>The frameworks with details for each framework, including the framework name, Amazon Resource Name (ARN), description, number of controls, creation time, and deployment status.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</td>
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
    <td><a href="#describe_framework"><CopyableCode code="describe_framework" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-framework_name"><code>framework_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the framework details for the specified FrameworkName.</td>
</tr>
<tr>
    <td><a href="#list_frameworks"><CopyableCode code="list_frameworks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_framework"><CopyableCode code="create_framework" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FrameworkName"><code>FrameworkName</code></a>, <a href="#parameter-FrameworkControls"><code>FrameworkControls</code></a></td>
    <td></td>
    <td>Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.</td>
</tr>
<tr>
    <td><a href="#update_framework"><CopyableCode code="update_framework" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-framework_name"><code>framework_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified framework.</td>
</tr>
<tr>
    <td><a href="#delete_framework"><CopyableCode code="delete_framework" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-framework_name"><code>framework_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the framework specified by a framework name.</td>
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
<tr id="parameter-framework_name">
    <td><CopyableCode code="framework_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of a framework.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_framework"
    values={[
        { label: 'describe_framework', value: 'describe_framework' },
        { label: 'list_frameworks', value: 'list_frameworks' }
    ]}
>
<TabItem value="describe_framework">

Returns the framework details for the specified FrameworkName.

```sql
SELECT
CreationTime,
DeploymentStatus,
FrameworkArn,
FrameworkControls,
FrameworkDescription,
FrameworkName,
FrameworkStatus,
IdempotencyToken
FROM aws.backup.frameworks
WHERE framework_name = '{{ framework_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_frameworks">

Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region.

```sql
SELECT
Frameworks,
NextToken
FROM aws.backup.frameworks
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_framework"
    values={[
        { label: 'create_framework', value: 'create_framework' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_framework">

Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.

```sql
INSERT INTO aws.backup.frameworks (
FrameworkName,
FrameworkDescription,
FrameworkControls,
IdempotencyToken,
FrameworkTags,
region
)
SELECT 
'{{ FrameworkName }}' /* required */,
'{{ FrameworkDescription }}',
'{{ FrameworkControls }}' /* required */,
'{{ IdempotencyToken }}',
'{{ FrameworkTags }}',
'{{ region }}'
RETURNING
FrameworkArn,
FrameworkName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: frameworks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the frameworks resource.
    - name: FrameworkName
      value: "{{ FrameworkName }}"
    - name: FrameworkDescription
      value: "{{ FrameworkDescription }}"
    - name: FrameworkControls
      value:
        - ControlName: "{{ ControlName }}"
          ControlInputParameters: "{{ ControlInputParameters }}"
          ControlScope:
            ComplianceResourceIds:
              - "{{ ComplianceResourceIds }}"
            ComplianceResourceTypes:
              - "{{ ComplianceResourceTypes }}"
            Tags: "{{ Tags }}"
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
    - name: FrameworkTags
      value: "{{ FrameworkTags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_framework"
    values={[
        { label: 'update_framework', value: 'update_framework' }
    ]}
>
<TabItem value="update_framework">

Updates the specified framework.

```sql
UPDATE aws.backup.frameworks
SET 
FrameworkDescription = '{{ FrameworkDescription }}',
FrameworkControls = '{{ FrameworkControls }}',
IdempotencyToken = '{{ IdempotencyToken }}'
WHERE 
framework_name = '{{ framework_name }}' --required
AND region = '{{ region }}' --required
RETURNING
CreationTime,
FrameworkArn,
FrameworkName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_framework"
    values={[
        { label: 'delete_framework', value: 'delete_framework' }
    ]}
>
<TabItem value="delete_framework">

Deletes the framework specified by a framework name.

```sql
DELETE FROM aws.backup.frameworks
WHERE framework_name = '{{ framework_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
