--- 
title: assistant_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - assistant_associations
  - wisdom
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

Creates, updates, deletes, gets or lists an <code>assistant_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assistant_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wisdom.assistant_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_assistant_association"
    values={[
        { label: 'get_assistant_association', value: 'get_assistant_association' },
        { label: 'list_assistant_associations', value: 'list_assistant_associations' }
    ]}
>
<TabItem value="get_assistant_association">

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
    <td><CopyableCode code="assistant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Wisdom assistant. (pattern: &lt;code&gt;^arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the assistant association. (pattern: &lt;code&gt;^arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_association_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the assistant association. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Wisdom assistant. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_data" /></td>
    <td><code>object</code></td>
    <td>A union type that currently has a single argument, the knowledge base ID.</td>
</tr>
<tr>
    <td><CopyableCode code="association_type" /></td>
    <td><code>string</code></td>
    <td>The type of association. (KNOWLEDGE_BASE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_assistant_associations">

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
    <td><CopyableCode code="assistant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Wisdom assistant. (pattern: &lt;code&gt;^arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the assistant association. (pattern: &lt;code&gt;^arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_association_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the assistant association. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Wisdom assistant. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_data" /></td>
    <td><code>object</code></td>
    <td>The association data.</td>
</tr>
<tr>
    <td><CopyableCode code="association_type" /></td>
    <td><code>string</code></td>
    <td>The type of association. (KNOWLEDGE_BASE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
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
    <td><a href="#get_assistant_association"><CopyableCode code="get_assistant_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_association_id"><code>assistant_association_id</code></a>, <a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an assistant association.</td>
</tr>
<tr>
    <td><a href="#list_assistant_associations"><CopyableCode code="list_assistant_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists information about assistant associations.</td>
</tr>
<tr>
    <td><a href="#create_assistant_association"><CopyableCode code="create_assistant_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-association"><code>association</code></a>, <a href="#parameter-associationType"><code>associationType</code></a></td>
    <td></td>
    <td>Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.</td>
</tr>
<tr>
    <td><a href="#delete_assistant_association"><CopyableCode code="delete_assistant_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-assistant_association_id"><code>assistant_association_id</code></a>, <a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an assistant association.</td>
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
<tr id="parameter-assistant_association_id">
    <td><CopyableCode code="assistant_association_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_assistant_association"
    values={[
        { label: 'get_assistant_association', value: 'get_assistant_association' },
        { label: 'list_assistant_associations', value: 'list_assistant_associations' }
    ]}
>
<TabItem value="get_assistant_association">

Retrieves information about an assistant association.

```sql
SELECT
assistant_arn,
assistant_association_arn,
assistant_association_id,
assistant_id,
association_data,
association_type,
tags
FROM aws.wisdom.assistant_associations
WHERE assistant_association_id = '{{ assistant_association_id }}' -- required
AND assistant_id = '{{ assistant_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_assistant_associations">

Lists information about assistant associations.

```sql
SELECT
assistant_arn,
assistant_association_arn,
assistant_association_id,
assistant_id,
association_data,
association_type,
tags
FROM aws.wisdom.assistant_associations
WHERE assistant_id = '{{ assistant_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_assistant_association"
    values={[
        { label: 'create_assistant_association', value: 'create_assistant_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_assistant_association">

Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.

```sql
INSERT INTO aws.wisdom.assistant_associations (
association,
associationType,
clientToken,
tags,
assistant_id,
region
)
SELECT 
'{{ association }}' /* required */,
'{{ associationType }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ assistant_id }}',
'{{ region }}'
RETURNING
assistant_association
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assistant_associations
  props:
    - name: assistant_id
      value: "{{ assistant_id }}"
      description: Required parameter for the assistant_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assistant_associations resource.
    - name: association
      description: |
        The data that is input into Wisdom as a result of the assistant association.
      value:
        knowledgeBaseId: "{{ knowledgeBaseId }}"
    - name: associationType
      value: "{{ associationType }}"
      valid_values: ['KNOWLEDGE_BASE']
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_assistant_association"
    values={[
        { label: 'delete_assistant_association', value: 'delete_assistant_association' }
    ]}
>
<TabItem value="delete_assistant_association">

Deletes an assistant association.

```sql
DELETE FROM aws.wisdom.assistant_associations
WHERE assistant_association_id = '{{ assistant_association_id }}' --required
AND assistant_id = '{{ assistant_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
