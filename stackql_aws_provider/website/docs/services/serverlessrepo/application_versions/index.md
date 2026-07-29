--- 
title: application_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - application_versions
  - serverlessrepo
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

Creates, updates, deletes, gets or lists an <code>application_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.serverlessrepo.application_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_application_versions"
    values={[
        { label: 'list_application_versions', value: 'list_application_versions' }
    ]}
>
<TabItem value="list_application_versions">

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
    <td>The application Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time this resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="semantic_version" /></td>
    <td><code>string</code></td>
    <td>The semantic version of the application: https:​//semver.org/</td>
</tr>
<tr>
    <td><CopyableCode code="source_code_url" /></td>
    <td><code>string</code></td>
    <td>A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.</td>
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
    <td><a href="#list_application_versions"><CopyableCode code="list_application_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxItems"><code>maxItems</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists versions for the specified application.</td>
</tr>
<tr>
    <td><a href="#create_application_version"><CopyableCode code="create_application_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-semantic_version"><code>semantic_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an application version.</td>
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
    <td>The Amazon Resource Name (ARN) of the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-semantic_version">
    <td><CopyableCode code="semantic_version" /></td>
    <td><code>string</code></td>
    <td>The semantic version of the new version.</td>
</tr>
<tr id="parameter-maxItems">
    <td><CopyableCode code="maxItems" /></td>
    <td><code>integer</code></td>
    <td>The total number of items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to specify where to start paginating.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_application_versions"
    values={[
        { label: 'list_application_versions', value: 'list_application_versions' }
    ]}
>
<TabItem value="list_application_versions">

Lists versions for the specified application.

```sql
SELECT
application_id,
creation_time,
semantic_version,
source_code_url
FROM aws.serverlessrepo.application_versions
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND maxItems = '{{ maxItems }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application_version"
    values={[
        { label: 'create_application_version', value: 'create_application_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application_version">

Creates an application version.

```sql
INSERT INTO aws.serverlessrepo.application_versions (
SourceCodeArchiveUrl,
SourceCodeUrl,
TemplateBody,
TemplateUrl,
application_id,
semantic_version,
region
)
SELECT 
'{{ SourceCodeArchiveUrl }}',
'{{ SourceCodeUrl }}',
'{{ TemplateBody }}',
'{{ TemplateUrl }}',
'{{ application_id }}',
'{{ semantic_version }}',
'{{ region }}'
RETURNING
application_id,
creation_time,
parameter_definitions,
required_capabilities,
resources_supported,
semantic_version,
source_code_archive_url,
source_code_url,
template_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: application_versions
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the application_versions resource.
    - name: semantic_version
      value: "{{ semantic_version }}"
      description: Required parameter for the application_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the application_versions resource.
    - name: SourceCodeArchiveUrl
      value: "{{ SourceCodeArchiveUrl }}"
    - name: SourceCodeUrl
      value: "{{ SourceCodeUrl }}"
    - name: TemplateBody
      value: "{{ TemplateBody }}"
    - name: TemplateUrl
      value: "{{ TemplateUrl }}"
`}</CodeBlock>

</TabItem>
</Tabs>
