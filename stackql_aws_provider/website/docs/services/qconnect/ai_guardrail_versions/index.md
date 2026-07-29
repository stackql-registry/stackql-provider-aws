--- 
title: ai_guardrail_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_guardrail_versions
  - qconnect
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

Creates, updates, deletes, gets or lists an <code>ai_guardrail_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_guardrail_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.ai_guardrail_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ai_guardrail_versions"
    values={[
        { label: 'list_ai_guardrail_versions', value: 'list_ai_guardrail_versions' }
    ]}
>
<TabItem value="list_ai_guardrail_versions">

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
    <td><CopyableCode code="ai_guardrail_summary" /></td>
    <td><code>object</code></td>
    <td>The summary of the AI Guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number for this AI Guardrail version.</td>
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
    <td><a href="#list_ai_guardrail_versions"><CopyableCode code="list_ai_guardrail_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_guardrail_id"><code>ai_guardrail_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists AI Guardrail versions.</td>
</tr>
<tr>
    <td><a href="#create_ai_guardrail_version"><CopyableCode code="create_ai_guardrail_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_guardrail_id"><code>ai_guardrail_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an Amazon Q in Connect AI Guardrail version.</td>
</tr>
<tr>
    <td><a href="#delete_ai_guardrail_version"><CopyableCode code="delete_ai_guardrail_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_guardrail_id"><code>ai_guardrail_id</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete and Amazon Q in Connect AI Guardrail version.</td>
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
<tr id="parameter-ai_guardrail_id">
    <td><CopyableCode code="ai_guardrail_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect AI Guardrail.</td>
</tr>
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_number">
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the AI Guardrail version to be deleted.</td>
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
    defaultValue="list_ai_guardrail_versions"
    values={[
        { label: 'list_ai_guardrail_versions', value: 'list_ai_guardrail_versions' }
    ]}
>
<TabItem value="list_ai_guardrail_versions">

Lists AI Guardrail versions.

```sql
SELECT
ai_guardrail_summary,
version_number
FROM aws.qconnect.ai_guardrail_versions
WHERE assistant_id = '{{ assistant_id }}' -- required
AND ai_guardrail_id = '{{ ai_guardrail_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_guardrail_version"
    values={[
        { label: 'create_ai_guardrail_version', value: 'create_ai_guardrail_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_guardrail_version">

Creates an Amazon Q in Connect AI Guardrail version.

```sql
INSERT INTO aws.qconnect.ai_guardrail_versions (
modifiedTime,
clientToken,
assistant_id,
ai_guardrail_id,
region
)
SELECT 
'{{ modifiedTime }}',
'{{ clientToken }}',
'{{ assistant_id }}',
'{{ ai_guardrail_id }}',
'{{ region }}'
RETURNING
ai_guardrail,
version_number
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ai_guardrail_versions
  props:
    - name: assistant_id
      value: "{{ assistant_id }}"
      description: Required parameter for the ai_guardrail_versions resource.
    - name: ai_guardrail_id
      value: "{{ ai_guardrail_id }}"
      description: Required parameter for the ai_guardrail_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ai_guardrail_versions resource.
    - name: modifiedTime
      value: "{{ modifiedTime }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_guardrail_version"
    values={[
        { label: 'delete_ai_guardrail_version', value: 'delete_ai_guardrail_version' }
    ]}
>
<TabItem value="delete_ai_guardrail_version">

Delete and Amazon Q in Connect AI Guardrail version.

```sql
DELETE FROM aws.qconnect.ai_guardrail_versions
WHERE assistant_id = '{{ assistant_id }}' --required
AND ai_guardrail_id = '{{ ai_guardrail_id }}' --required
AND version_number = '{{ version_number }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
