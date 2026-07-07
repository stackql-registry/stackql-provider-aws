--- 
title: associated_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_packages
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

Creates, updates, deletes, gets or lists an <code>associated_packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.associated_packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_associated_packages"
    values={[
        { label: 'list_associated_packages', value: 'list_associated_packages' }
    ]}
>
<TabItem value="list_associated_packages">

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
    <td><CopyableCode code="associationType" /></td>
    <td><code>string</code></td>
    <td>Describes the strength of the association between the package and package group. A strong match can be thought of as an exact match, and a weak match can be thought of as a variation match, for example, the package name matches a variation of the package group pattern. For more information about package group pattern matching, including strong and weak matches, see Package group definition syntax and matching behavior in the CodeArtifact User Guide. (STRONG, WEAK)</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>A format that specifies the type of the associated package. (npm, pypi, maven, nuget, generic, ruby, swift, cargo)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the associated package. The package component that specifies its namespace depends on its type. For example: The namespace of a Maven package version is its groupId. The namespace of an npm or Swift package version is its scope. The namespace of a generic package is its namespace. Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The name of the associated package. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_associated_packages"><CopyableCode code="list_associated_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-package-group"><code>package-group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-preview"><code>preview</code></a></td>
    <td>Returns a list of packages associated with the requested package group. For information package group association and matching, see Package group definition syntax and matching behavior in the CodeArtifact User Guide.</td>
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
    <td>The name of the domain that contains the package group from which to list associated packages.</td>
</tr>
<tr id="parameter-package-group">
    <td><CopyableCode code="package-group" /></td>
    <td><code>string</code></td>
    <td>The pattern of the package group from which to list associated packages.</td>
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
<tr id="parameter-preview">
    <td><CopyableCode code="preview" /></td>
    <td><code>boolean</code></td>
    <td>When this flag is included, ListAssociatedPackages will return a list of packages that would be associated with a package group, even if it does not exist.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_associated_packages"
    values={[
        { label: 'list_associated_packages', value: 'list_associated_packages' }
    ]}
>
<TabItem value="list_associated_packages">

Returns a list of packages associated with the requested package group. For information package group association and matching, see Package group definition syntax and matching behavior in the CodeArtifact User Guide.

```sql
SELECT
associationType,
format_,
namespace,
package
FROM aws.codeartifact.associated_packages
WHERE domain = '{{ domain }}' -- required
AND `package-group` = '{{ package-group }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
AND preview = '{{ preview }}'
;
```
</TabItem>
</Tabs>
