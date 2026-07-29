--- 
title: application_access_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - application_access_scopes
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>application_access_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_access_scopes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.application_access_scopes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_access_scope"
    values={[
        { label: 'get_application_access_scope', value: 'get_application_access_scope' }
    ]}
>
<TabItem value="get_application_access_scope">

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
    <td><CopyableCode code="authorized_targets" /></td>
    <td><code>array</code></td>
    <td>An array of authorized targets associated with this access scope.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The name of the access scope that can be used with the authorized targets. (pattern: &lt;code&gt;(&#91;A-Za-z0-9_&#93;&#123;1,50&#125;)(:&#91;A-Za-z0-9_&#93;&#123;1,50&#125;)&#123;0,1&#125;(:&#91;A-Za-z0-9_&#93;&#123;1,50&#125;)&#123;0,1&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_application_access_scope"><CopyableCode code="get_application_access_scope" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the authorized targets for an IAM Identity Center access scope for an application.</td>
</tr>
<tr>
    <td><a href="#put_application_access_scope"><CopyableCode code="put_application_access_scope" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationArn"><code>ApplicationArn</code></a></td>
    <td></td>
    <td>Adds or updates the list of authorized targets for an IAM Identity Center access scope for an application.</td>
</tr>
<tr>
    <td><a href="#delete_application_access_scope"><CopyableCode code="delete_application_access_scope" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an IAM Identity Center access scope from an application.</td>
</tr>
<tr>
    <td><a href="#list_application_access_scopes"><CopyableCode code="list_application_access_scopes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationArn"><code>ApplicationArn</code></a></td>
    <td></td>
    <td>Lists the access scopes and authorized targets associated with an application.</td>
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
    defaultValue="get_application_access_scope"
    values={[
        { label: 'get_application_access_scope', value: 'get_application_access_scope' }
    ]}
>
<TabItem value="get_application_access_scope">

Retrieves the authorized targets for an IAM Identity Center access scope for an application.

```sql
SELECT
authorized_targets,
scope
FROM aws.sso_admin.application_access_scopes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_application_access_scope"
    values={[
        { label: 'put_application_access_scope', value: 'put_application_access_scope' }
    ]}
>
<TabItem value="put_application_access_scope">

Adds or updates the list of authorized targets for an IAM Identity Center access scope for an application.

```sql
REPLACE aws.sso_admin.application_access_scopes
SET 
Scope = '{{ Scope }}',
AuthorizedTargets = '{{ AuthorizedTargets }}',
ApplicationArn = '{{ ApplicationArn }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationArn = '{{ ApplicationArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_access_scope"
    values={[
        { label: 'delete_application_access_scope', value: 'delete_application_access_scope' }
    ]}
>
<TabItem value="delete_application_access_scope">

Deletes an IAM Identity Center access scope from an application.

```sql
DELETE FROM aws.sso_admin.application_access_scopes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_application_access_scopes"
    values={[
        { label: 'list_application_access_scopes', value: 'list_application_access_scopes' }
    ]}
>
<TabItem value="list_application_access_scopes">

Lists the access scopes and authorized targets associated with an application.

```sql
EXEC aws.sso_admin.application_access_scopes.list_application_access_scopes 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationArn": "{{ ApplicationArn }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
