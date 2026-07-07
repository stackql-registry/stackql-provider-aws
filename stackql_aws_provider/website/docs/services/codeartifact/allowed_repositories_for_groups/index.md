--- 
title: allowed_repositories_for_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - allowed_repositories_for_groups
  - codeartifact
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

Creates, updates, deletes, gets or lists an <code>allowed_repositories_for_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="allowed_repositories_for_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.allowed_repositories_for_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_allowed_repositories_for_group"
    values={[
        { label: 'list_allowed_repositories_for_group', value: 'list_allowed_repositories_for_group' }
    ]}
>
<TabItem value="list_allowed_repositories_for_group">

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
    <td><CopyableCode code="allowed_repository" /></td>
    <td><code>string</code></td>
    <td>The list of allowed repositories for the package group and origin configuration restriction type.</td>
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
    <td><a href="#list_allowed_repositories_for_group"><CopyableCode code="list_allowed_repositories_for_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-package-group"><code>package-group</code></a>, <a href="#parameter-originRestrictionType"><code>originRestrictionType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists the repositories in the added repositories list of the specified restriction type for a package group. For more information about restriction types and added repository lists, see Package group origin controls in the CodeArtifact User Guide.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the package group from which to list allowed repositories.</td>
</tr>
<tr id="parameter-originRestrictionType">
    <td><CopyableCode code="originRestrictionType" /></td>
    <td><code>string</code></td>
    <td>The origin configuration restriction type of which to list allowed repositories.</td>
</tr>
<tr id="parameter-package-group">
    <td><CopyableCode code="package-group" /></td>
    <td><code>string</code></td>
    <td>The pattern of the package group from which to list allowed repositories.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_allowed_repositories_for_group"
    values={[
        { label: 'list_allowed_repositories_for_group', value: 'list_allowed_repositories_for_group' }
    ]}
>
<TabItem value="list_allowed_repositories_for_group">

Lists the repositories in the added repositories list of the specified restriction type for a package group. For more information about restriction types and added repository lists, see Package group origin controls in the CodeArtifact User Guide.

```sql
SELECT
allowed_repository
FROM aws.codeartifact.allowed_repositories_for_groups
WHERE domain = '{{ domain }}' -- required
AND `package-group` = '{{ package-group }}' -- required
AND originRestrictionType = '{{ originRestrictionType }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>
