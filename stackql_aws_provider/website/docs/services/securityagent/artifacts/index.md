--- 
title: artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - artifacts
  - securityagent
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

Creates, updates, deletes, gets or lists an <code>artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="artifacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.artifacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_artifact"
    values={[
        { label: 'get_artifact', value: 'get_artifact' },
        { label: 'list_artifacts', value: 'list_artifacts' }
    ]}
>
<TabItem value="get_artifact">

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
    <td><CopyableCode code="agentSpaceId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the agent space.</td>
</tr>
<tr>
    <td><CopyableCode code="artifact" /></td>
    <td><code>object</code></td>
    <td>The artifact content and type.</td>
</tr>
<tr>
    <td><CopyableCode code="artifactId" /></td>
    <td><code>string</code></td>
    <td>The id of the artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="fileName" /></td>
    <td><code>string</code></td>
    <td>The file name of the artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the artifact was last updated, in UTC format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_artifacts">

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
    <td><CopyableCode code="artifactId" /></td>
    <td><code>string</code></td>
    <td>The id of the artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="artifactType" /></td>
    <td><code>string</code></td>
    <td>Supported file extension types for artifacts. (TXT, PNG, JPEG, MD, PDF, DOCX, DOC, JSON, YAML)</td>
</tr>
<tr>
    <td><CopyableCode code="fileName" /></td>
    <td><code>string</code></td>
    <td>The file name of the artifact.</td>
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
    <td><a href="#get_artifact"><CopyableCode code="get_artifact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an artifact from an agent space.</td>
</tr>
<tr>
    <td><a href="#list_artifacts"><CopyableCode code="list_artifacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of artifact summaries for the specified agent space.</td>
</tr>
<tr>
    <td><a href="#add_artifact"><CopyableCode code="add_artifact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-artifactContent"><code>artifactContent</code></a>, <a href="#parameter-artifactType"><code>artifactType</code></a>, <a href="#parameter-fileName"><code>fileName</code></a></td>
    <td></td>
    <td>Uploads an artifact to an agent space. Artifacts provide additional context for security testing, such as architecture diagrams, API specifications, or configuration files.</td>
</tr>
<tr>
    <td><a href="#delete_artifact"><CopyableCode code="delete_artifact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an artifact from an agent space.</td>
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
    defaultValue="get_artifact"
    values={[
        { label: 'get_artifact', value: 'get_artifact' },
        { label: 'list_artifacts', value: 'list_artifacts' }
    ]}
>
<TabItem value="get_artifact">

Retrieves an artifact from an agent space.

```sql
SELECT
agentSpaceId,
artifact,
artifactId,
fileName,
updatedAt
FROM aws.securityagent.artifacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_artifacts">

Returns a paginated list of artifact summaries for the specified agent space.

```sql
SELECT
artifactId,
artifactType,
fileName
FROM aws.securityagent.artifacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_artifact"
    values={[
        { label: 'add_artifact', value: 'add_artifact' }
    ]}
>
<TabItem value="add_artifact">

Uploads an artifact to an agent space. Artifacts provide additional context for security testing, such as architecture diagrams, API specifications, or configuration files.

```sql
UPDATE aws.securityagent.artifacts
SET 
agentSpaceId = '{{ agentSpaceId }}',
artifactContent = '{{ artifactContent }}',
artifactType = '{{ artifactType }}',
fileName = '{{ fileName }}'
WHERE 
region = '{{ region }}' --required
AND agentSpaceId = '{{ agentSpaceId }}' --required
AND artifactContent = '{{ artifactContent }}' --required
AND artifactType = '{{ artifactType }}' --required
AND fileName = '{{ fileName }}' --required
RETURNING
artifactId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_artifact"
    values={[
        { label: 'delete_artifact', value: 'delete_artifact' }
    ]}
>
<TabItem value="delete_artifact">

Deletes an artifact from an agent space.

```sql
DELETE FROM aws.securityagent.artifacts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
