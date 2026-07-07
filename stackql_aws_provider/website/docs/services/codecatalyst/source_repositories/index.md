--- 
title: source_repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - source_repositories
  - codecatalyst
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

Creates, updates, deletes, gets or lists a <code>source_repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_repositories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.source_repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_source_repository"
    values={[
        { label: 'get_source_repository', value: 'get_source_repository' },
        { label: 'list_source_repositories', value: 'list_source_repositories' }
    ]}
>
<TabItem value="get_source_repository">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the source repository. (pattern: &lt;code&gt;(?!.*&#91;.&#93;git$)&#91;\w\-.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the source repository was created, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the source repository.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the source repository was last updated, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
</tr>
<tr>
    <td><CopyableCode code="projectName" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="spaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_source_repositories">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the source repository. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the source repository. (pattern: &lt;code&gt;(?!.*&#91;.&#93;git$)&#91;\w\-.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the source repository was created, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the repository, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the source repository was last updated, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
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
    <td><a href="#get_source_repository"><CopyableCode code="get_source_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a source repository.</td>
</tr>
<tr>
    <td><a href="#list_source_repositories"><CopyableCode code="list_source_repositories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of source repositories in a project.</td>
</tr>
<tr>
    <td><a href="#create_source_repository"><CopyableCode code="create_source_repository" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an empty Git-based source repository in a specified project. The repository is created with an initial empty commit with a default branch named main.</td>
</tr>
<tr>
    <td><a href="#delete_source_repository"><CopyableCode code="delete_source_repository" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a source repository in Amazon CodeCatalyst. You cannot use this API to delete a linked repository. It can only be used to delete a Amazon CodeCatalyst source repository.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the source repository.</td>
</tr>
<tr id="parameter-project_name">
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-space_name">
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_source_repository"
    values={[
        { label: 'get_source_repository', value: 'get_source_repository' },
        { label: 'list_source_repositories', value: 'list_source_repositories' }
    ]}
>
<TabItem value="get_source_repository">

Returns information about a source repository.

```sql
SELECT
name,
createdTime,
description,
lastUpdatedTime,
projectName,
spaceName
FROM aws.codecatalyst.source_repositories
WHERE space_name = '{{ space_name }}' -- required
AND project_name = '{{ project_name }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_source_repositories">

Retrieves a list of source repositories in a project.

```sql
SELECT
id,
name,
createdTime,
description,
lastUpdatedTime
FROM aws.codecatalyst.source_repositories
WHERE space_name = '{{ space_name }}' -- required
AND project_name = '{{ project_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_source_repository"
    values={[
        { label: 'create_source_repository', value: 'create_source_repository' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_source_repository">

Creates an empty Git-based source repository in a specified project. The repository is created with an initial empty commit with a default branch named main.

```sql
INSERT INTO aws.codecatalyst.source_repositories (
description,
space_name,
project_name,
name,
region
)
SELECT 
'{{ description }}',
'{{ space_name }}',
'{{ project_name }}',
'{{ name }}',
'{{ region }}'
RETURNING
name,
description,
projectName,
spaceName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: source_repositories
  props:
    - name: space_name
      value: "{{ space_name }}"
      description: Required parameter for the source_repositories resource.
    - name: project_name
      value: "{{ project_name }}"
      description: Required parameter for the source_repositories resource.
    - name: name
      value: "{{ name }}"
      description: Required parameter for the source_repositories resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the source_repositories resource.
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_source_repository"
    values={[
        { label: 'delete_source_repository', value: 'delete_source_repository' }
    ]}
>
<TabItem value="delete_source_repository">

Deletes a source repository in Amazon CodeCatalyst. You cannot use this API to delete a linked repository. It can only be used to delete a Amazon CodeCatalyst source repository.

```sql
DELETE FROM aws.codecatalyst.source_repositories
WHERE space_name = '{{ space_name }}' --required
AND project_name = '{{ project_name }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
