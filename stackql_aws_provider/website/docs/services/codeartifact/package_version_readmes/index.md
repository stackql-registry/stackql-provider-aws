--- 
title: package_version_readmes
hide_title: false
hide_table_of_contents: false
keywords:
  - package_version_readmes
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

Creates, updates, deletes, gets or lists a <code>package_version_readmes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="package_version_readmes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.package_version_readmes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_package_version_readme"
    values={[
        { label: 'get_package_version_readme', value: 'get_package_version_readme' }
    ]}
>
<TabItem value="get_package_version_readme">

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
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format of the package with the requested readme file. (npm, pypi, maven, nuget, generic, ruby, swift, cargo)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package version with the requested readme file. The package component that specifies its namespace depends on its type. For example: The namespace of a Maven package version is its groupId. The namespace of an npm or Swift package version is its scope. The namespace of a generic package is its namespace. Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The name of the package that contains the returned readme file. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="readme" /></td>
    <td><code>string</code></td>
    <td>The text of the returned readme file.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the package with the requested readme file. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="versionRevision" /></td>
    <td><code>string</code></td>
    <td>The current revision associated with the package version. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#get_package_version_readme"><CopyableCode code="get_package_version_readme" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Gets the readme file or descriptive text for a package version. The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText.</td>
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
    <td>The name of the domain that contains the repository that contains the package version with the requested readme file.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>A format that specifies the type of the package version with the requested readme file.</td>
</tr>
<tr id="parameter-package">
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The name of the package version that contains the requested readme file.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The repository that contains the package with the requested readme file.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A string that contains the package version (for example, 3.5.2).</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package version with the requested readme file. The package component that specifies its namespace depends on its type. For example: The namespace is required when requesting the readme from package versions of the following formats: Maven Swift generic The namespace of a Maven package version is its groupId. The namespace of an npm or Swift package version is its scope. The namespace of a generic package is its namespace. Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_package_version_readme"
    values={[
        { label: 'get_package_version_readme', value: 'get_package_version_readme' }
    ]}
>
<TabItem value="get_package_version_readme">

Gets the readme file or descriptive text for a package version. The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText.

```sql
SELECT
format_,
namespace,
package,
readme,
version,
versionRevision
FROM aws.codeartifact.package_version_readmes
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND format = '{{ format }}' -- required
AND package = '{{ package }}' -- required
AND version = '{{ version }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND namespace = '{{ namespace }}'
;
```
</TabItem>
</Tabs>
