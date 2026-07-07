--- 
title: packages
hide_title: false
hide_table_of_contents: false
keywords:
  - packages
  - es
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_packages"
    values={[
        { label: 'describe_packages', value: 'describe_packages' }
    ]}
>
<TabItem value="describe_packages">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="PackageDetailsList" /></td>
    <td><code>array</code></td>
    <td>List of PackageDetails objects.</td>
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
    <td><a href="#describe_packages"><CopyableCode code="describe_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.</td>
</tr>
<tr>
    <td><a href="#create_package"><CopyableCode code="create_package" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackageName"><code>PackageName</code></a>, <a href="#parameter-PackageType"><code>PackageType</code></a>, <a href="#parameter-PackageSource"><code>PackageSource</code></a></td>
    <td></td>
    <td>Create a package for use with Amazon ES domains.</td>
</tr>
<tr>
    <td><a href="#associate_package"><CopyableCode code="associate_package" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a package with an Amazon ES domain.</td>
</tr>
<tr>
    <td><a href="#update_package"><CopyableCode code="update_package" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackageID"><code>PackageID</code></a>, <a href="#parameter-PackageSource"><code>PackageSource</code></a></td>
    <td></td>
    <td>Updates a package for use with Amazon ES domains.</td>
</tr>
<tr>
    <td><a href="#delete_package"><CopyableCode code="delete_package" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the package.</td>
</tr>
<tr>
    <td><a href="#dissociate_package"><CopyableCode code="dissociate_package" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Dissociates a package from the Amazon ES domain.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Name of the domain that you want to associate the package with.</td>
</tr>
<tr id="parameter-package_id">
    <td><CopyableCode code="package_id" /></td>
    <td><code>string</code></td>
    <td>Internal ID of the package that you want to associate with a domain. Use DescribePackages to find this value.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_packages"
    values={[
        { label: 'describe_packages', value: 'describe_packages' }
    ]}
>
<TabItem value="describe_packages">

Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.

```sql
SELECT
NextToken,
PackageDetailsList
FROM aws.es.packages
WHERE region = '{{ region }}' -- required
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

Create a package for use with Amazon ES domains.

```sql
INSERT INTO aws.es.packages (
PackageName,
PackageType,
PackageDescription,
PackageSource,
region
)
SELECT 
'{{ PackageName }}' /* required */,
'{{ PackageType }}' /* required */,
'{{ PackageDescription }}',
'{{ PackageSource }}' /* required */,
'{{ region }}'
RETURNING
PackageDetails
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
    - name: PackageType
      value: "{{ PackageType }}"
      valid_values: ['TXT-DICTIONARY']
    - name: PackageDescription
      value: "{{ PackageDescription }}"
    - name: PackageSource
      description: |
        The S3 location for importing the package specified as S3BucketName and S3Key
      value:
        S3BucketName: "{{ S3BucketName }}"
        S3Key: "{{ S3Key }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_package"
    values={[
        { label: 'associate_package', value: 'associate_package' },
        { label: 'update_package', value: 'update_package' }
    ]}
>
<TabItem value="associate_package">

Associates a package with an Amazon ES domain.

```sql
UPDATE aws.es.packages
SET 
-- No updatable properties
WHERE 
package_id = '{{ package_id }}' --required
AND domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
DomainPackageDetails;
```
</TabItem>
<TabItem value="update_package">

Updates a package for use with Amazon ES domains.

```sql
UPDATE aws.es.packages
SET 
PackageID = '{{ PackageID }}',
PackageSource = '{{ PackageSource }}',
PackageDescription = '{{ PackageDescription }}',
CommitMessage = '{{ CommitMessage }}'
WHERE 
region = '{{ region }}' --required
AND PackageID = '{{ PackageID }}' --required
AND PackageSource = '{{ PackageSource }}' --required
RETURNING
PackageDetails;
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

Delete the package.

```sql
DELETE FROM aws.es.packages
WHERE package_id = '{{ package_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="dissociate_package"
    values={[
        { label: 'dissociate_package', value: 'dissociate_package' }
    ]}
>
<TabItem value="dissociate_package">

Dissociates a package from the Amazon ES domain.

```sql
EXEC aws.es.packages.dissociate_package 
@package_id='{{ package_id }}' --required, 
@domain_name='{{ domain_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
