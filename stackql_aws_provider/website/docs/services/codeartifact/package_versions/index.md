--- 
title: package_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - package_versions
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

Creates, updates, deletes, gets or lists a <code>package_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="package_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.package_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_package_version"
    values={[
        { label: 'describe_package_version', value: 'describe_package_version' },
        { label: 'list_package_versions', value: 'list_package_versions' }
    ]}
>
<TabItem value="describe_package_version">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the package that is displayed. The displayName varies depending on the package version's format. For example, if an npm package is named ui, is in the namespace vue, and has the format npm, then the displayName is @vue/ui.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format of the package version. (npm, pypi, maven, nuget, generic, ruby, swift, cargo)</td>
</tr>
<tr>
    <td><CopyableCode code="homePage" /></td>
    <td><code>string</code></td>
    <td>The homepage associated with the package.</td>
</tr>
<tr>
    <td><CopyableCode code="licenses" /></td>
    <td><code>array</code></td>
    <td>Information about licenses associated with the package version.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package version. The package component that specifies its namespace depends on its type. For example: The namespace of a Maven package version is its groupId. The namespace of an npm or Swift package version is its scope. The namespace of a generic package is its namespace. Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>object</code></td>
    <td>A PackageVersionOrigin object that contains information about how the package version was added to the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="packageName" /></td>
    <td><code>string</code></td>
    <td>The name of the requested package. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="publishedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that contains the date and time the package version was published.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the package version. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceCodeRepository" /></td>
    <td><code>string</code></td>
    <td>The repository for the source code in the package version, or the source code used to build it.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A string that contains the status of the package version. (Published, Unfinished, Unlisted, Archived, Disposed, Deleted)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A summary of the package version. The summary is extracted from the package. The information in and detail level of the summary depends on the package version's format.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the package. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_package_versions">

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
    <td><CopyableCode code="origin" /></td>
    <td><code>object</code></td>
    <td>A PackageVersionOrigin object that contains information about how the package version was added to the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision associated with a package version. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A string that contains the status of the package version. It can be one of the following: (Published, Unfinished, Unlisted, Archived, Disposed, Deleted)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Information about a package version. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_package_version"><CopyableCode code="describe_package_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Returns a PackageVersionDescription object that contains information about the requested package version.</td>
</tr>
<tr>
    <td><a href="#list_package_versions"><CopyableCode code="list_package_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-originType"><code>originType</code></a></td>
    <td>Returns a list of PackageVersionSummary objects for package versions in a repository that match the request parameters. Package versions of all statuses will be returned by default when calling list-package-versions with no --status parameter.</td>
</tr>
<tr>
    <td><a href="#update_package_versions_status"><CopyableCode code="update_package_versions_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-versions"><code>versions</code></a>, <a href="#parameter-targetStatus"><code>targetStatus</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Updates the status of one or more versions of a package. Using UpdatePackageVersionsStatus, you can update the status of package versions to Archived, Published, or Unlisted. To set the status of a package version to Disposed, use DisposePackageVersions.</td>
</tr>
<tr>
    <td><a href="#delete_package_versions"><CopyableCode code="delete_package_versions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Deletes one or more versions of a package. A deleted package version cannot be restored in your repository. If you want to remove a package version from your repository and be able to restore it later, set its status to Archived. Archived packages cannot be downloaded from a repository and don't show up with list package APIs (for example, ListPackageVersions), but you can restore them using UpdatePackageVersionsStatus.</td>
</tr>
<tr>
    <td><a href="#copy_package_versions"><CopyableCode code="copy_package_versions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-source-repository"><code>source-repository</code></a>, <a href="#parameter-destination-repository"><code>destination-repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Copies package versions from one repository to another repository in the same domain. You must specify versions or versionRevisions. You cannot specify both.</td>
</tr>
<tr>
    <td><a href="#dispose_package_versions"><CopyableCode code="dispose_package_versions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-versions"><code>versions</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Deletes the assets in package versions and sets the package versions' status to Disposed. A disposed package version cannot be restored in your repository because its assets are deleted. To view all disposed package versions in a repository, use ListPackageVersions and set the status parameter to Disposed. To view information about a disposed package version, use DescribePackageVersion.</td>
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
<tr id="parameter-destination-repository">
    <td><CopyableCode code="destination-repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository into which package versions are copied.</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the repository you want to dispose.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>A format that specifies the type of package versions you want to dispose.</td>
</tr>
<tr id="parameter-package">
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The name of the package with the versions you want to dispose.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository that contains the package versions you want to dispose.</td>
</tr>
<tr id="parameter-source-repository">
    <td><CopyableCode code="source-repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository that contains the package versions to be copied.</td>
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
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package versions to be disposed. The package component that specifies its namespace depends on its type. For example: The namespace is required when disposing package versions of the following formats: Maven Swift generic The namespace of a Maven package version is its groupId. The namespace of an npm or Swift package version is its scope. The namespace of a generic package is its namespace. Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-originType">
    <td><CopyableCode code="originType" /></td>
    <td><code>string</code></td>
    <td>The originType used to filter package versions. Only package versions with the provided originType will be returned.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>How to sort the requested list of package versions.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A string that filters the requested package versions by status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_package_version"
    values={[
        { label: 'describe_package_version', value: 'describe_package_version' },
        { label: 'list_package_versions', value: 'list_package_versions' }
    ]}
>
<TabItem value="describe_package_version">

Returns a PackageVersionDescription object that contains information about the requested package version.

```sql
SELECT
displayName,
format_,
homePage,
licenses,
namespace,
origin,
packageName,
publishedTime,
revision,
sourceCodeRepository,
status,
summary,
version
FROM aws.codeartifact.package_versions
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
<TabItem value="list_package_versions">

Returns a list of PackageVersionSummary objects for package versions in a repository that match the request parameters. Package versions of all statuses will be returned by default when calling list-package-versions with no --status parameter.

```sql
SELECT
origin,
revision,
status,
version
FROM aws.codeartifact.package_versions
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND format = '{{ format }}' -- required
AND package = '{{ package }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND namespace = '{{ namespace }}'
AND status = '{{ status }}'
AND sortBy = '{{ sortBy }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
AND originType = '{{ originType }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_package_versions_status"
    values={[
        { label: 'update_package_versions_status', value: 'update_package_versions_status' }
    ]}
>
<TabItem value="update_package_versions_status">

Updates the status of one or more versions of a package. Using UpdatePackageVersionsStatus, you can update the status of package versions to Archived, Published, or Unlisted. To set the status of a package version to Disposed, use DisposePackageVersions.

```sql
UPDATE aws.codeartifact.package_versions
SET 
versions = '{{ versions }}',
versionRevisions = '{{ versionRevisions }}',
expectedStatus = '{{ expectedStatus }}',
targetStatus = '{{ targetStatus }}'
WHERE 
domain = '{{ domain }}' --required
AND repository = '{{ repository }}' --required
AND format = '{{ format }}' --required
AND package = '{{ package }}' --required
AND region = '{{ region }}' --required
AND versions = '{{ versions }}' --required
AND targetStatus = '{{ targetStatus }}' --required
AND `domain-owner` = '{{ domain-owner}}'
AND namespace = '{{ namespace}}'
RETURNING
failedVersions,
successfulVersions;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_package_versions"
    values={[
        { label: 'delete_package_versions', value: 'delete_package_versions' }
    ]}
>
<TabItem value="delete_package_versions">

Deletes one or more versions of a package. A deleted package version cannot be restored in your repository. If you want to remove a package version from your repository and be able to restore it later, set its status to Archived. Archived packages cannot be downloaded from a repository and don't show up with list package APIs (for example, ListPackageVersions), but you can restore them using UpdatePackageVersionsStatus.

```sql
DELETE FROM aws.codeartifact.package_versions
WHERE domain = '{{ domain }}' --required
AND repository = '{{ repository }}' --required
AND format = '{{ format }}' --required
AND package = '{{ package }}' --required
AND region = '{{ region }}' --required
AND `domain-owner` = '{{ domain-owner }}'
AND namespace = '{{ namespace }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_package_versions"
    values={[
        { label: 'copy_package_versions', value: 'copy_package_versions' },
        { label: 'dispose_package_versions', value: 'dispose_package_versions' }
    ]}
>
<TabItem value="copy_package_versions">

Copies package versions from one repository to another repository in the same domain. You must specify versions or versionRevisions. You cannot specify both.

```sql
EXEC aws.codeartifact.package_versions.copy_package_versions 
@domain='{{ domain }}' --required, 
@source-repository='{{ source-repository }}' --required, 
@destination-repository='{{ destination-repository }}' --required, 
@format='{{ format }}' --required, 
@package='{{ package }}' --required, 
@region='{{ region }}' --required, 
@domain-owner='{{ domain-owner }}', 
@namespace='{{ namespace }}' 
@@json=
'{
"versions": "{{ versions }}", 
"versionRevisions": "{{ versionRevisions }}", 
"allowOverwrite": {{ allowOverwrite }}, 
"includeFromUpstream": {{ includeFromUpstream }}
}'
;
```
</TabItem>
<TabItem value="dispose_package_versions">

Deletes the assets in package versions and sets the package versions' status to Disposed. A disposed package version cannot be restored in your repository because its assets are deleted. To view all disposed package versions in a repository, use ListPackageVersions and set the status parameter to Disposed. To view information about a disposed package version, use DescribePackageVersion.

```sql
EXEC aws.codeartifact.package_versions.dispose_package_versions 
@domain='{{ domain }}' --required, 
@repository='{{ repository }}' --required, 
@format='{{ format }}' --required, 
@package='{{ package }}' --required, 
@region='{{ region }}' --required, 
@domain-owner='{{ domain-owner }}', 
@namespace='{{ namespace }}' 
@@json=
'{
"versions": "{{ versions }}", 
"versionRevisions": "{{ versionRevisions }}", 
"expectedStatus": "{{ expectedStatus }}"
}'
;
```
</TabItem>
</Tabs>
