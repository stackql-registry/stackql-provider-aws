--- 
title: sub_package_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - sub_package_groups
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

Creates, updates, deletes, gets or lists a <code>sub_package_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sub_package_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.sub_package_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_sub_package_groups"
    values={[
        { label: 'list_sub_package_groups', value: 'list_sub_package_groups' }
    ]}
>
<TabItem value="list_sub_package_groups">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the package group. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contactInfo" /></td>
    <td><code>string</code></td>
    <td>The contact information of the package group. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that represents the date and time the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the package group. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The domain that contains the package group. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9\-&#93;&#123;0,48&#125;&#91;a-z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainOwner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="originConfiguration" /></td>
    <td><code>object</code></td>
    <td>Details about the package origin configuration of a package group.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>The direct parent package group of the package group.</td>
</tr>
<tr>
    <td><CopyableCode code="pattern_" /></td>
    <td><code>string</code></td>
    <td>The pattern of the package group. The pattern determines which packages are associated with the package group. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;\p&#123;IsWhitespace&#125;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_sub_package_groups"><CopyableCode code="list_sub_package_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-package-group"><code>package-group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of direct children of the specified package group. For information package group hierarchy, see Package group definition syntax and matching behavior in the CodeArtifact User Guide.</td>
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
    <td>The name of the domain which contains the package group from which to list sub package groups.</td>
</tr>
<tr id="parameter-package-group">
    <td><CopyableCode code="package-group" /></td>
    <td><code>string</code></td>
    <td>The pattern of the package group from which to list sub package groups.</td>
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
    defaultValue="list_sub_package_groups"
    values={[
        { label: 'list_sub_package_groups', value: 'list_sub_package_groups' }
    ]}
>
<TabItem value="list_sub_package_groups">

Returns a list of direct children of the specified package group. For information package group hierarchy, see Package group definition syntax and matching behavior in the CodeArtifact User Guide.

```sql
SELECT
arn,
contactInfo,
createdTime,
description,
domainName,
domainOwner,
originConfiguration,
parent,
pattern_
FROM aws.codeartifact.sub_package_groups
WHERE domain = '{{ domain }}' -- required
AND `package-group` = '{{ package-group }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>
