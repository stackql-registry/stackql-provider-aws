--- 
title: ai_agent_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_agent_versions
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

Creates, updates, deletes, gets or lists an <code>ai_agent_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_agent_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.ai_agent_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ai_agent_versions"
    values={[
        { label: 'list_ai_agent_versions', value: 'list_ai_agent_versions' }
    ]}
>
<TabItem value="list_ai_agent_versions">

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
    <td><CopyableCode code="aiAgentSummary" /></td>
    <td><code>object</code></td>
    <td>The summary of the AI Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="versionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number for this AI Agent version.</td>
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
    <td><a href="#list_ai_agent_versions"><CopyableCode code="list_ai_agent_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_agent_id"><code>ai_agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-origin"><code>origin</code></a></td>
    <td>List AI Agent versions.</td>
</tr>
<tr>
    <td><a href="#create_ai_agent_version"><CopyableCode code="create_ai_agent_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_agent_id"><code>ai_agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates and Amazon Q in Connect AI Agent version.</td>
</tr>
<tr>
    <td><a href="#delete_ai_agent_version"><CopyableCode code="delete_ai_agent_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_agent_id"><code>ai_agent_id</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q in Connect AI Agent Version.</td>
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
<tr id="parameter-ai_agent_id">
    <td><CopyableCode code="ai_agent_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect AI Agent. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
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
    <td>The version number of the AI Agent version.</td>
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
<tr id="parameter-origin">
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The origin of the AI Agent versions to be listed. SYSTEM for a default AI Agent created by Q in Connect or CUSTOMER for an AI Agent created by calling AI Agent creation APIs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_ai_agent_versions"
    values={[
        { label: 'list_ai_agent_versions', value: 'list_ai_agent_versions' }
    ]}
>
<TabItem value="list_ai_agent_versions">

List AI Agent versions.

```sql
SELECT
aiAgentSummary,
versionNumber
FROM aws.qconnect.ai_agent_versions
WHERE assistant_id = '{{ assistant_id }}' -- required
AND ai_agent_id = '{{ ai_agent_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND origin = '{{ origin }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_agent_version"
    values={[
        { label: 'create_ai_agent_version', value: 'create_ai_agent_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_agent_version">

Creates and Amazon Q in Connect AI Agent version.

```sql
INSERT INTO aws.qconnect.ai_agent_versions (
modifiedTime,
clientToken,
assistant_id,
ai_agent_id,
region
)
SELECT 
'{{ modifiedTime }}',
'{{ clientToken }}',
'{{ assistant_id }}',
'{{ ai_agent_id }}',
'{{ region }}'
RETURNING
aiAgent,
versionNumber
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ai_agent_versions
  props:
    - name: assistant_id
      value: "{{ assistant_id }}"
      description: Required parameter for the ai_agent_versions resource.
    - name: ai_agent_id
      value: "{{ ai_agent_id }}"
      description: Required parameter for the ai_agent_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ai_agent_versions resource.
    - name: modifiedTime
      value: "{{ modifiedTime }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_agent_version"
    values={[
        { label: 'delete_ai_agent_version', value: 'delete_ai_agent_version' }
    ]}
>
<TabItem value="delete_ai_agent_version">

Deletes an Amazon Q in Connect AI Agent Version.

```sql
DELETE FROM aws.qconnect.ai_agent_versions
WHERE assistant_id = '{{ assistant_id }}' --required
AND ai_agent_id = '{{ ai_agent_id }}' --required
AND version_number = '{{ version_number }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
