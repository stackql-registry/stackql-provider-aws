--- 
title: retrievers
hide_title: false
hide_table_of_contents: false
keywords:
  - retrievers
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>retrievers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="retrievers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.retrievers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_retriever"
    values={[
        { label: 'get_retriever', value: 'get_retriever' },
        { label: 'list_retrievers', value: 'list_retrievers' }
    ]}
>
<TabItem value="get_retriever">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application using the retriever. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Provides information on how the retriever used for your Amazon Q Business application is configured.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the retriever was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the retriever. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retriever_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role associated with the retriever. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retriever_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the retriever. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role with the permission to access the retriever and required resources. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the retriever. (CREATING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the retriever. (NATIVE_INDEX, KENDRA_INDEX)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the retriever was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_retrievers">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application using the retriever. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of your retriever. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retriever_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the retriever used by your Amazon Q Business application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of your retriever. (CREATING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of your retriever. (NATIVE_INDEX, KENDRA_INDEX)</td>
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
    <td><a href="#get_retriever"><CopyableCode code="get_retriever" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-retriever_id"><code>retriever_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an existing retriever used by an Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#list_retrievers"><CopyableCode code="list_retrievers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the retriever used by an Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#create_retriever"><CopyableCode code="create_retriever" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Adds a retriever to your Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#update_retriever"><CopyableCode code="update_retriever" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-retriever_id"><code>retriever_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the retriever used for your Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#delete_retriever"><CopyableCode code="delete_retriever" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-retriever_id"><code>retriever_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the retriever used by an Amazon Q Business application.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application using the retriever.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-retriever_id">
    <td><CopyableCode code="retriever_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the retriever being deleted.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of retrievers returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the number of retrievers returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of retrievers.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_retriever"
    values={[
        { label: 'get_retriever', value: 'get_retriever' },
        { label: 'list_retrievers', value: 'list_retrievers' }
    ]}
>
<TabItem value="get_retriever">

Gets information about an existing retriever used by an Amazon Q Business application.

```sql
SELECT
application_id,
configuration,
created_at,
display_name,
retriever_arn,
retriever_id,
role_arn,
status,
type_,
updated_at
FROM aws.qbusiness.retrievers
WHERE application_id = '{{ application_id }}' -- required
AND retriever_id = '{{ retriever_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_retrievers">

Lists the retriever used by an Amazon Q Business application.

```sql
SELECT
application_id,
display_name,
retriever_id,
status,
type_
FROM aws.qbusiness.retrievers
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_retriever"
    values={[
        { label: 'create_retriever', value: 'create_retriever' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_retriever">

Adds a retriever to your Amazon Q Business application.

```sql
INSERT INTO aws.qbusiness.retrievers (
type,
displayName,
configuration,
roleArn,
clientToken,
tags,
application_id,
region
)
SELECT 
'{{ type }}' /* required */,
'{{ displayName }}' /* required */,
'{{ configuration }}' /* required */,
'{{ roleArn }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
retriever_arn,
retriever_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: retrievers
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the retrievers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the retrievers resource.
    - name: type
      value: "{{ type }}"
      valid_values: ['NATIVE_INDEX', 'KENDRA_INDEX']
    - name: displayName
      value: "{{ displayName }}"
    - name: configuration
      description: |
        Provides information on how the retriever used for your Amazon Q Business application is configured.
      value:
        nativeIndexConfiguration:
          indexId: "{{ indexId }}"
          version: {{ version }}
          boostingOverride: "{{ boostingOverride }}"
        kendraIndexConfiguration:
          indexId: "{{ indexId }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_retriever"
    values={[
        { label: 'update_retriever', value: 'update_retriever' }
    ]}
>
<TabItem value="update_retriever">

Updates the retriever used for your Amazon Q Business application.

```sql
UPDATE aws.qbusiness.retrievers
SET 
configuration = '{{ configuration }}',
displayName = '{{ displayName }}',
roleArn = '{{ roleArn }}'
WHERE 
application_id = '{{ application_id }}' --required
AND retriever_id = '{{ retriever_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_retriever"
    values={[
        { label: 'delete_retriever', value: 'delete_retriever' }
    ]}
>
<TabItem value="delete_retriever">

Deletes the retriever used by an Amazon Q Business application.

```sql
DELETE FROM aws.qbusiness.retrievers
WHERE application_id = '{{ application_id }}' --required
AND retriever_id = '{{ retriever_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
