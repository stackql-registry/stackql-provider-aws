--- 
title: prompts
hide_title: false
hide_table_of_contents: false
keywords:
  - prompts
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

Creates, updates, deletes, gets or lists a <code>prompts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="prompts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.prompts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_prompt"
    values={[
        { label: 'describe_prompt', value: 'describe_prompt' },
        { label: 'list_prompts', value: 'list_prompts' },
        { label: 'search_prompts', value: 'search_prompts' }
    ]}
>
<TabItem value="describe_prompt">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="PromptARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="PromptId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_prompts">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the prompt.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_prompts">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="PromptARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="PromptId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
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
    <td><a href="#describe_prompt"><CopyableCode code="describe_prompt" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-prompt_id"><code>prompt_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the prompt.</td>
</tr>
<tr>
    <td><a href="#list_prompts"><CopyableCode code="list_prompts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides information about the prompts for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#search_prompts"><CopyableCode code="search_prompts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches prompts in an Amazon Connect instance, with optional filtering.</td>
</tr>
<tr>
    <td><a href="#create_prompt"><CopyableCode code="create_prompt" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-S3Uri"><code>S3Uri</code></a></td>
    <td></td>
    <td>Creates a prompt. For more information about prompts, such as supported file types and maximum length, see Create prompts in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#update_prompt"><CopyableCode code="update_prompt" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-prompt_id"><code>prompt_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a prompt.</td>
</tr>
<tr>
    <td><a href="#delete_prompt"><CopyableCode code="delete_prompt" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-prompt_id"><code>prompt_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a prompt.</td>
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
<tr id="parameter-prompt_id">
    <td><CopyableCode code="prompt_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the prompt.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_prompt"
    values={[
        { label: 'describe_prompt', value: 'describe_prompt' },
        { label: 'list_prompts', value: 'list_prompts' },
        { label: 'search_prompts', value: 'search_prompts' }
    ]}
>
<TabItem value="describe_prompt">

Describes the prompt.

```sql
SELECT
Description,
LastModifiedRegion,
LastModifiedTime,
Name,
PromptARN,
PromptId,
Tags
FROM aws.connect.prompts
WHERE instance_id = '{{ instance_id }}' -- required
AND prompt_id = '{{ prompt_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_prompts">

Provides information about the prompts for the specified Amazon Connect instance.

```sql
SELECT
Arn,
Id,
LastModifiedRegion,
LastModifiedTime,
Name
FROM aws.connect.prompts
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_prompts">

Searches prompts in an Amazon Connect instance, with optional filtering.

```sql
SELECT
Description,
LastModifiedRegion,
LastModifiedTime,
Name,
PromptARN,
PromptId,
Tags
FROM aws.connect.prompts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_prompt"
    values={[
        { label: 'create_prompt', value: 'create_prompt' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_prompt">

Creates a prompt. For more information about prompts, such as supported file types and maximum length, see Create prompts in the Amazon Connect Administrator Guide.

```sql
INSERT INTO aws.connect.prompts (
Name,
Description,
S3Uri,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ S3Uri }}' /* required */,
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
PromptARN,
PromptId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: prompts
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the prompts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the prompts resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: S3Uri
      value: "{{ S3Uri }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_prompt"
    values={[
        { label: 'update_prompt', value: 'update_prompt' }
    ]}
>
<TabItem value="update_prompt">

Updates a prompt.

```sql
UPDATE aws.connect.prompts
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
S3Uri = '{{ S3Uri }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND prompt_id = '{{ prompt_id }}' --required
AND region = '{{ region }}' --required
RETURNING
PromptARN,
PromptId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_prompt"
    values={[
        { label: 'delete_prompt', value: 'delete_prompt' }
    ]}
>
<TabItem value="delete_prompt">

Deletes a prompt.

```sql
DELETE FROM aws.connect.prompts
WHERE instance_id = '{{ instance_id }}' --required
AND prompt_id = '{{ prompt_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
