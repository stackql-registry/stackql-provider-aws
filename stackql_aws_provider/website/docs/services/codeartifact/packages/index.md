--- 
title: packages
hide_title: false
hide_table_of_contents: false
keywords:
  - packages
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

Creates, updates, deletes, gets or lists a <code>packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_package"
    values={[
        { label: 'describe_package', value: 'describe_package' },
        { label: 'list_packages', value: 'list_packages' }
    ]}
>
<TabItem value="describe_package">

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
    <td>The name of the package. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>A format that specifies the type of the package. (npm, pypi, maven, nuget, generic, ruby, swift, cargo)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package. The package component that specifies its namespace depends on its type. For example: The namespace of a Maven package version is its groupId. The namespace of an npm or Swift package version is its scope. The namespace of a generic package is its namespace. Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="originConfiguration" /></td>
    <td><code>object</code></td>
    <td>The package origin configuration for the package.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_packages">

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
    <td>The format of the package. (npm, pypi, maven, nuget, generic, ruby, swift, cargo)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package. The package component that specifies its namespace depends on its type. For example: The namespace of a Maven package version is its groupId. The namespace of an npm or Swift package version is its scope. The namespace of a generic package is its namespace. Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="originConfiguration" /></td>
    <td><code>object</code></td>
    <td>A PackageOriginConfiguration object that contains a PackageOriginRestrictions object that contains information about the upstream and publish package origin restrictions.</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The name of the package. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_package"><CopyableCode code="describe_package" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Returns a PackageDescription object that contains information about the requested package.</td>
</tr>
<tr>
    <td><a href="#list_packages"><CopyableCode code="list_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-package-prefix"><code>package-prefix</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-publish"><code>publish</code></a>, <a href="#parameter-upstream"><code>upstream</code></a></td>
    <td>Returns a list of PackageSummary objects for packages in a repository that match the request parameters.</td>
</tr>
<tr>
    <td><a href="#put_package_origin_configuration"><CopyableCode code="put_package_origin_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-restrictions"><code>restrictions</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Sets the package origin configuration for a package. The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source. For more information about package origin controls and configuration, see Editing package origin controls in the CodeArtifact User Guide. PutPackageOriginConfiguration can be called on a package that doesn't yet exist in the repository. When called on a package that does not exist, a package is created in the repository with no versions and the requested restrictions are set on the package. This can be used to preemptively block ingesting or retaining any versions from external connections or upstream repositories, or to block publishing any versions of the package into the repository before connecting any package managers or publishers to the repository.</td>
</tr>
<tr>
    <td><a href="#delete_package"><CopyableCode code="delete_package" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Deletes a package and all associated package versions. A deleted package cannot be restored. To delete one or more package versions, use the DeletePackageVersions API.</td>
</tr>
<tr>
    <td><a href="#publish_package_version"><CopyableCode code="publish_package_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-asset"><code>asset</code></a>, <a href="#parameter-x-amz-content-sha256"><code>x-amz-content-sha256</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetContent"><code>assetContent</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-unfinished"><code>unfinished</code></a></td>
    <td>Creates a new package version containing one or more assets (or files). The unfinished flag can be used to keep the package version in the Unfinished state until all of its assets have been uploaded (see Package version status in the CodeArtifact user guide). To set the package version’s status to Published, omit the unfinished flag when uploading the final asset, or set the status using UpdatePackageVersionStatus. Once a package version’s status is set to Published, it cannot change back to Unfinished. Only generic packages can be published using this API. For more information, see Using generic packages in the CodeArtifact User Guide.</td>
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
<tr id="parameter-asset">
    <td><CopyableCode code="asset" /></td>
    <td><code>string</code></td>
    <td>The name of the asset to publish. Asset names can include Unicode letters and numbers, and the following special characters: ~ ! @ ^ & ( ) - ` _ + &#91; &#93; &#123; &#125; ; , . `</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the repository that contains the package version to publish.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>A format that specifies the type of the package version with the requested asset file. The only supported value is generic.</td>
</tr>
<tr id="parameter-package">
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The name of the package version to publish.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository that the package version will be published to.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The package version to publish (for example, 3.5.2).</td>
</tr>
<tr id="parameter-x-amz-content-sha256">
    <td><CopyableCode code="x-amz-content-sha256" /></td>
    <td><code>string</code></td>
    <td>The SHA256 hash of the assetContent to publish. This value must be calculated by the caller and provided with the request (see Publishing a generic package in the CodeArtifact User Guide). This value is used as an integrity check to verify that the assetContent has not changed after it was originally sent.</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format used to filter requested packages. Only packages from the provided format will be returned.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package version to publish.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-package-prefix">
    <td><CopyableCode code="package-prefix" /></td>
    <td><code>string</code></td>
    <td>A prefix used to filter requested packages. Only packages with names that start with packagePrefix are returned.</td>
</tr>
<tr id="parameter-publish">
    <td><CopyableCode code="publish" /></td>
    <td><code>string</code></td>
    <td>The value of the Publish package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see PackageOriginRestrictions.</td>
</tr>
<tr id="parameter-unfinished">
    <td><CopyableCode code="unfinished" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the package version should remain in the unfinished state. If omitted, the package version status will be set to Published (see Package version status in the CodeArtifact User Guide). Valid values: unfinished</td>
</tr>
<tr id="parameter-upstream">
    <td><CopyableCode code="upstream" /></td>
    <td><code>string</code></td>
    <td>The value of the Upstream package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see PackageOriginRestrictions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_package"
    values={[
        { label: 'describe_package', value: 'describe_package' },
        { label: 'list_packages', value: 'list_packages' }
    ]}
>
<TabItem value="describe_package">

Returns a PackageDescription object that contains information about the requested package.

```sql
SELECT
name,
format_,
namespace,
originConfiguration
FROM aws.codeartifact.packages
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND format = '{{ format }}' -- required
AND package = '{{ package }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND namespace = '{{ namespace }}'
;
```
</TabItem>
<TabItem value="list_packages">

Returns a list of PackageSummary objects for packages in a repository that match the request parameters.

```sql
SELECT
format_,
namespace,
originConfiguration,
package
FROM aws.codeartifact.packages
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND format = '{{ format }}'
AND namespace = '{{ namespace }}'
AND `package-prefix` = '{{ package-prefix }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
AND publish = '{{ publish }}'
AND upstream = '{{ upstream }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_package_origin_configuration"
    values={[
        { label: 'put_package_origin_configuration', value: 'put_package_origin_configuration' }
    ]}
>
<TabItem value="put_package_origin_configuration">

Sets the package origin configuration for a package. The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source. For more information about package origin controls and configuration, see Editing package origin controls in the CodeArtifact User Guide. PutPackageOriginConfiguration can be called on a package that doesn't yet exist in the repository. When called on a package that does not exist, a package is created in the repository with no versions and the requested restrictions are set on the package. This can be used to preemptively block ingesting or retaining any versions from external connections or upstream repositories, or to block publishing any versions of the package into the repository before connecting any package managers or publishers to the repository.

```sql
REPLACE aws.codeartifact.packages
SET 
restrictions = '{{ restrictions }}'
WHERE 
domain = '{{ domain }}' --required
AND repository = '{{ repository }}' --required
AND format = '{{ format }}' --required
AND package = '{{ package }}' --required
AND region = '{{ region }}' --required
AND restrictions = '{{ restrictions }}' --required
AND `domain-owner` = '{{ domain-owner}}'
AND namespace = '{{ namespace}}'
RETURNING
originConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_package"
    values={[
        { label: 'delete_package', value: 'delete_package' }
    ]}
>
<TabItem value="delete_package">

Deletes a package and all associated package versions. A deleted package cannot be restored. To delete one or more package versions, use the DeletePackageVersions API.

```sql
DELETE FROM aws.codeartifact.packages
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
    defaultValue="publish_package_version"
    values={[
        { label: 'publish_package_version', value: 'publish_package_version' }
    ]}
>
<TabItem value="publish_package_version">

Creates a new package version containing one or more assets (or files). The unfinished flag can be used to keep the package version in the Unfinished state until all of its assets have been uploaded (see Package version status in the CodeArtifact user guide). To set the package version’s status to Published, omit the unfinished flag when uploading the final asset, or set the status using UpdatePackageVersionStatus. Once a package version’s status is set to Published, it cannot change back to Unfinished. Only generic packages can be published using this API. For more information, see Using generic packages in the CodeArtifact User Guide.

```sql
EXEC aws.codeartifact.packages.publish_package_version 
@domain='{{ domain }}' --required, 
@repository='{{ repository }}' --required, 
@format='{{ format }}' --required, 
@package='{{ package }}' --required, 
@version='{{ version }}' --required, 
@asset='{{ asset }}' --required, 
@x-amz-content-sha256='{{ x-amz-content-sha256 }}' --required, 
@region='{{ region }}' --required, 
@domain-owner='{{ domain-owner }}', 
@namespace='{{ namespace }}', 
@unfinished={{ unfinished }} 
@@json=
'{
"assetContent": "{{ assetContent }}"
}'
;
```
</TabItem>
</Tabs>
