--- 
title: source_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - source_credentials
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>source_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.source_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_source_credentials"
    values={[
        { label: 'list_source_credentials', value: 'list_source_credentials' }
    ]}
>
<TabItem value="list_source_credentials">

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
    <td><CopyableCode code="source_credentials_infos" /></td>
    <td><code>array</code></td>
    <td>A list of SourceCredentialsInfo objects. Each SourceCredentialsInfo object includes the authentication type, token ARN, and type of source provider for one set of credentials.</td>
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
    <td><a href="#list_source_credentials"><CopyableCode code="list_source_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of SourceCredentialsInfo objects.</td>
</tr>
<tr>
    <td><a href="#delete_source_credentials"><CopyableCode code="delete_source_credentials" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.</td>
</tr>
<tr>
    <td><a href="#import_source_credentials"><CopyableCode code="import_source_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-serverType"><code>serverType</code></a>, <a href="#parameter-authType"><code>authType</code></a></td>
    <td></td>
    <td>Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.</td>
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
    defaultValue="list_source_credentials"
    values={[
        { label: 'list_source_credentials', value: 'list_source_credentials' }
    ]}
>
<TabItem value="list_source_credentials">

Returns a list of SourceCredentialsInfo objects.

```sql
SELECT
source_credentials_infos
FROM aws.codebuild.source_credentials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_source_credentials"
    values={[
        { label: 'delete_source_credentials', value: 'delete_source_credentials' }
    ]}
>
<TabItem value="delete_source_credentials">

Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.

```sql
DELETE FROM aws.codebuild.source_credentials
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_source_credentials"
    values={[
        { label: 'import_source_credentials', value: 'import_source_credentials' }
    ]}
>
<TabItem value="import_source_credentials">

Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.

```sql
EXEC aws.codebuild.source_credentials.import_source_credentials 
@region='{{ region }}' --required 
@@json=
'{
"username": "{{ username }}", 
"token": "{{ token }}", 
"serverType": "{{ serverType }}", 
"authType": "{{ authType }}", 
"shouldOverwrite": {{ shouldOverwrite }}
}'
;
```
</TabItem>
</Tabs>
