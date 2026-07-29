--- 
title: packages
hide_title: false
hide_table_of_contents: false
keywords:
  - packages
  - panorama
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.panorama.packages" /></td></tr>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The package's ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the package was created.</td>
</tr>
<tr>
    <td><CopyableCode code="package_id" /></td>
    <td><code>string</code></td>
    <td>The package's ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The package's name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="read_access_principal_arns" /></td>
    <td><code>array</code></td>
    <td>ARNs of accounts that have read access to the package.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_location" /></td>
    <td><code>object</code></td>
    <td>The package's storage location.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The package's tags.</td>
</tr>
<tr>
    <td><CopyableCode code="write_access_principal_arns" /></td>
    <td><code>array</code></td>
    <td>ARNs of accounts that have write access to the package.</td>
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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token that's included if more results are available. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="packages" /></td>
    <td><code>array</code></td>
    <td>A list of packages.</td>
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
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a package.</td>
</tr>
<tr>
    <td><a href="#list_packages"><CopyableCode code="list_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of packages.</td>
</tr>
<tr>
    <td><a href="#create_package"><CopyableCode code="create_package" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackageName"><code>PackageName</code></a></td>
    <td></td>
    <td>Creates a package and storage location in an Amazon S3 access point.</td>
</tr>
<tr>
    <td><a href="#delete_package"><CopyableCode code="delete_package" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ForceDelete"><code>ForceDelete</code></a></td>
    <td>Deletes a package. To delete a package, you need permission to call s3:DeleteObject in addition to permissions for the AWS Panorama API.</td>
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
<tr id="parameter-package_id">
    <td><CopyableCode code="package_id" /></td>
    <td><code>string</code></td>
    <td>The package's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ForceDelete">
    <td><CopyableCode code="ForceDelete" /></td>
    <td><code>boolean</code></td>
    <td>Delete the package even if it has artifacts stored in its access point. Deletes the package's artifacts from Amazon S3.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of packages to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
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

Returns information about a package.

```sql
SELECT
arn,
created_time,
package_id,
package_name,
read_access_principal_arns,
storage_location,
tags,
write_access_principal_arns
FROM aws.panorama.packages
WHERE package_id = '{{ package_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_packages">

Returns a list of packages.

```sql
SELECT
next_token,
packages
FROM aws.panorama.packages
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_package"
    values={[
        { label: 'create_package', value: 'create_package' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_package">

Creates a package and storage location in an Amazon S3 access point.

```sql
INSERT INTO aws.panorama.packages (
PackageName,
Tags,
region
)
SELECT 
'{{ PackageName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
package_id,
storage_location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: packages
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the packages resource.
    - name: PackageName
      value: "{{ PackageName }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

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

Deletes a package. To delete a package, you need permission to call s3:DeleteObject in addition to permissions for the AWS Panorama API.

```sql
DELETE FROM aws.panorama.packages
WHERE package_id = '{{ package_id }}' --required
AND region = '{{ region }}' --required
AND ForceDelete = '{{ ForceDelete }}'
;
```
</TabItem>
</Tabs>
