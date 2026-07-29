--- 
title: test_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - test_cases
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

Creates, updates, deletes, gets or lists a <code>test_cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.test_cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_test_case"
    values={[
        { label: 'describe_test_case', value: 'describe_test_case' },
        { label: 'list_test_cases', value: 'list_test_cases' },
        { label: 'search_test_cases', value: 'search_test_cases' }
    ]}
>
<TabItem value="describe_test_case">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The JSON string that represents the content of the test.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="entry_point" /></td>
    <td><code>object</code></td>
    <td>Defines the starting point for a test case.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="initialization_data" /></td>
    <td><code>string</code></td>
    <td>Defines the test attributes for precise data representation. The value must be a valid JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The region in which the test case was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the test case was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a test case. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="test_case_sha_256" /></td>
    <td><code>string</code></td>
    <td>The SHA256 hash of the test case content. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;64&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_test_cases">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The region in which the test case was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the test case was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a test case. (PUBLISHED, SAVED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_test_cases">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The JSON string that represents the content of the test.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="entry_point" /></td>
    <td><code>object</code></td>
    <td>Defines the starting point for a test case.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="initialization_data" /></td>
    <td><code>string</code></td>
    <td>Defines the test attributes for precise data representation. The value must be a valid JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The region in which the test case was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the test case was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a test case. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="test_case_sha_256" /></td>
    <td><code>string</code></td>
    <td>The SHA256 hash of the test case content. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;64&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_test_case"><CopyableCode code="describe_test_case" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a></td>
    <td>Describes the specified test case and allows you to get the content and metadata of the test case for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#list_test_cases"><CopyableCode code="list_test_cases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the test cases present in the specific Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#search_test_cases"><CopyableCode code="search_test_cases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for test cases in the specified Amazon Connect instance, with optional filtering.</td>
</tr>
<tr>
    <td><a href="#create_test_case"><CopyableCode code="create_test_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-resource-id"><code>x-amz-resource-id</code></a>, <a href="#parameter-x-amz-last-modified-time"><code>x-amz-last-modified-time</code></a>, <a href="#parameter-x-amz-last-modified-region"><code>x-amz-last-modified-region</code></a></td>
    <td>Creates a test case with its content and metadata for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#update_test_case"><CopyableCode code="update_test_case" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-last-modified-time"><code>x-amz-last-modified-time</code></a>, <a href="#parameter-x-amz-last-modified-region"><code>x-amz-last-modified-region</code></a></td>
    <td>Updates any of the metadata for a test case, such as the name, description, and status or content of an existing test case. This API doesn't allow customers to update the tags of the test case resource for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#delete_test_case"><CopyableCode code="delete_test_case" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the test case that has already been created for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#start_test_case_execution"><CopyableCode code="start_test_case_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts executing a published test case.</td>
</tr>
<tr>
    <td><a href="#stop_test_case_execution"><CopyableCode code="stop_test_case_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-test_case_execution_id"><code>test_case_execution_id</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a running test execution.</td>
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
    <td>The identifier of the Amazon Connect instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-test_case_execution_id">
    <td><CopyableCode code="test_case_execution_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test case execution to stop.</td>
</tr>
<tr id="parameter-test_case_id">
    <td><CopyableCode code="test_case_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test case.</td>
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
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the test case version to retrieve. If not specified, returns the published version if available, otherwise returns the saved version.</td>
</tr>
<tr id="parameter-x-amz-last-modified-region">
    <td><CopyableCode code="x-amz-last-modified-region" /></td>
    <td><code>string</code></td>
    <td>The region in which the resource was last modified</td>
</tr>
<tr id="parameter-x-amz-last-modified-time">
    <td><CopyableCode code="x-amz-last-modified-time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the resource was last modified.</td>
</tr>
<tr id="parameter-x-amz-resource-id">
    <td><CopyableCode code="x-amz-resource-id" /></td>
    <td><code>string</code></td>
    <td>Id of the test case if you want to create it in a replica region using Amazon Connect Global Resiliency</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_test_case"
    values={[
        { label: 'describe_test_case', value: 'describe_test_case' },
        { label: 'list_test_cases', value: 'list_test_cases' },
        { label: 'search_test_cases', value: 'search_test_cases' }
    ]}
>
<TabItem value="describe_test_case">

Describes the specified test case and allows you to get the content and metadata of the test case for the specified Amazon Connect instance.

```sql
SELECT
arn,
content,
description,
entry_point,
id,
initialization_data,
last_modified_region,
last_modified_time,
name,
status,
tags,
test_case_sha_256
FROM aws.connect.test_cases
WHERE instance_id = '{{ instance_id }}' -- required
AND test_case_id = '{{ test_case_id }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
;
```
</TabItem>
<TabItem value="list_test_cases">

Lists the test cases present in the specific Amazon Connect instance.

```sql
SELECT
arn,
id,
last_modified_region,
last_modified_time,
name,
status
FROM aws.connect.test_cases
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_test_cases">

Searches for test cases in the specified Amazon Connect instance, with optional filtering.

```sql
SELECT
arn,
content,
description,
entry_point,
id,
initialization_data,
last_modified_region,
last_modified_time,
name,
status,
tags,
test_case_sha_256
FROM aws.connect.test_cases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_test_case"
    values={[
        { label: 'create_test_case', value: 'create_test_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_test_case">

Creates a test case with its content and metadata for the specified Amazon Connect instance.

```sql
INSERT INTO aws.connect.test_cases (
Name,
Description,
Content,
EntryPoint,
InitializationData,
Status,
Tags,
instance_id,
region,
`x-amz-resource-id`,
`x-amz-last-modified-time`,
`x-amz-last-modified-region`
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Content }}',
'{{ EntryPoint }}',
'{{ InitializationData }}',
'{{ Status }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}',
'{{ x-amz-resource-id }}',
'{{ x-amz-last-modified-time }}',
'{{ x-amz-last-modified-region }}'
RETURNING
test_case_arn,
test_case_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: test_cases
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the test_cases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the test_cases resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Content
      value: "{{ Content }}"
    - name: EntryPoint
      description: |
        Defines the starting point for a test case.
      value:
        Type: "{{ Type }}"
        VoiceCallEntryPointParameters:
          SourcePhoneNumber: "{{ SourcePhoneNumber }}"
          DestinationPhoneNumber: "{{ DestinationPhoneNumber }}"
          FlowId: "{{ FlowId }}"
        ChatEntryPointParameters:
          FlowId: "{{ FlowId }}"
    - name: InitializationData
      value: "{{ InitializationData }}"
    - name: Status
      value: "{{ Status }}"
      description: |
        The status of a test case.
      valid_values: ['PUBLISHED', 'SAVED']
    - name: Tags
      value: "{{ Tags }}"
    - name: x-amz-resource-id
      value: "{{ x-amz-resource-id }}"
      description: Id of the test case if you want to create it in a replica region using Amazon Connect Global Resiliency
      description: Id of the test case if you want to create it in a replica region using Amazon Connect Global Resiliency
    - name: x-amz-last-modified-time
      value: "{{ x-amz-last-modified-time }}"
      description: The time at which the resource was last modified.
      description: The time at which the resource was last modified.
    - name: x-amz-last-modified-region
      value: "{{ x-amz-last-modified-region }}"
      description: The region in which the resource was last modified
      description: The region in which the resource was last modified
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_test_case"
    values={[
        { label: 'update_test_case', value: 'update_test_case' }
    ]}
>
<TabItem value="update_test_case">

Updates any of the metadata for a test case, such as the name, description, and status or content of an existing test case. This API doesn't allow customers to update the tags of the test case resource for the specified Amazon Connect instance.

```sql
UPDATE aws.connect.test_cases
SET 
Content = '{{ Content }}',
EntryPoint = '{{ EntryPoint }}',
InitializationData = '{{ InitializationData }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Status = '{{ Status }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND test_case_id = '{{ test_case_id }}' --required
AND region = '{{ region }}' --required
AND `x-amz-last-modified-time` = '{{ x-amz-last-modified-time}}'
AND `x-amz-last-modified-region` = '{{ x-amz-last-modified-region}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_test_case"
    values={[
        { label: 'delete_test_case', value: 'delete_test_case' }
    ]}
>
<TabItem value="delete_test_case">

Deletes the test case that has already been created for the specified Amazon Connect instance.

```sql
DELETE FROM aws.connect.test_cases
WHERE instance_id = '{{ instance_id }}' --required
AND test_case_id = '{{ test_case_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_test_case_execution"
    values={[
        { label: 'start_test_case_execution', value: 'start_test_case_execution' },
        { label: 'stop_test_case_execution', value: 'stop_test_case_execution' }
    ]}
>
<TabItem value="start_test_case_execution">

Starts executing a published test case.

```sql
EXEC aws.connect.test_cases.start_test_case_execution 
@instance_id='{{ instance_id }}' --required, 
@test_case_id='{{ test_case_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="stop_test_case_execution">

Stops a running test execution.

```sql
EXEC aws.connect.test_cases.stop_test_case_execution 
@instance_id='{{ instance_id }}' --required, 
@test_case_execution_id='{{ test_case_execution_id }}' --required, 
@test_case_id='{{ test_case_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
