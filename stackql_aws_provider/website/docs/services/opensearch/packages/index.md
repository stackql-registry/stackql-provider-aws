--- 
title: packages
hide_title: false
hide_table_of_contents: false
keywords:
  - packages
  - opensearch
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.packages" /></td></tr>
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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
</tr>
<tr>
    <td><CopyableCode code="package_details_list" /></td>
    <td><code>array</code></td>
    <td>Basic information about a package.</td>
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
    <td>Describes all packages available to OpenSearch Service. For more information, see Custom packages for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#create_package"><CopyableCode code="create_package" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackageName"><code>PackageName</code></a>, <a href="#parameter-PackageType"><code>PackageType</code></a>, <a href="#parameter-PackageSource"><code>PackageSource</code></a></td>
    <td></td>
    <td>Creates a package for use with Amazon OpenSearch Service domains. For more information, see Custom packages for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#associate_package"><CopyableCode code="associate_package" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a package with an Amazon OpenSearch Service domain. For more information, see Custom packages for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#associate_packages"><CopyableCode code="associate_packages" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackageList"><code>PackageList</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Operation in the Amazon OpenSearch Service API for associating multiple packages with a domain simultaneously.</td>
</tr>
<tr>
    <td><a href="#update_package"><CopyableCode code="update_package" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackageID"><code>PackageID</code></a>, <a href="#parameter-PackageSource"><code>PackageSource</code></a></td>
    <td></td>
    <td>Updates a package for use with Amazon OpenSearch Service domains. For more information, see Custom packages for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#update_package_scope"><CopyableCode code="update_package_scope" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackageID"><code>PackageID</code></a>, <a href="#parameter-PackageUserList"><code>PackageUserList</code></a></td>
    <td></td>
    <td>Updates the scope of a package. Scope of the package defines users who can view and associate a package.</td>
</tr>
<tr>
    <td><a href="#delete_package"><CopyableCode code="delete_package" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon OpenSearch Service package. For more information, see Custom packages for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#dissociate_package"><CopyableCode code="dissociate_package" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a package from the specified Amazon OpenSearch Service domain. The package can't be in use with any OpenSearch index for the dissociation to succeed. The package is still available in OpenSearch Service for association later. For more information, see Custom packages for Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#dissociate_packages"><CopyableCode code="dissociate_packages" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackageList"><code>PackageList</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Dissociates multiple packages from a domain simultaneously.</td>
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
    <td>Name of the domain to dissociate the package from.</td>
</tr>
<tr id="parameter-package_id">
    <td><CopyableCode code="package_id" /></td>
    <td><code>string</code></td>
    <td>Internal ID of the package to dissociate from the domain. Use ListPackagesForDomain to find this value.</td>
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

Describes all packages available to OpenSearch Service. For more information, see Custom packages for Amazon OpenSearch Service.

```sql
SELECT
next_token,
package_details_list
FROM aws.opensearch.packages
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

Creates a package for use with Amazon OpenSearch Service domains. For more information, see Custom packages for Amazon OpenSearch Service.

```sql
INSERT INTO aws.opensearch.packages (
PackageName,
PackageType,
PackageDescription,
PackageSource,
PackageConfiguration,
EngineVersion,
PackageVendingOptions,
PackageEncryptionOptions,
region
)
SELECT 
'{{ PackageName }}' /* required */,
'{{ PackageType }}' /* required */,
'{{ PackageDescription }}',
'{{ PackageSource }}' /* required */,
'{{ PackageConfiguration }}',
'{{ EngineVersion }}',
'{{ PackageVendingOptions }}',
'{{ PackageEncryptionOptions }}',
'{{ region }}'
RETURNING
package_details
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
      valid_values: ['TXT-DICTIONARY', 'ZIP-PLUGIN', 'PACKAGE-LICENSE', 'PACKAGE-CONFIG']
    - name: PackageDescription
      value: "{{ PackageDescription }}"
    - name: PackageSource
      description: |
        The Amazon S3 location to import the package from.
      value:
        S3BucketName: "{{ S3BucketName }}"
        S3Key: "{{ S3Key }}"
    - name: PackageConfiguration
      description: |
        The configuration parameters for a package.
      value:
        LicenseRequirement: "{{ LicenseRequirement }}"
        LicenseFilepath: "{{ LicenseFilepath }}"
        ConfigurationRequirement: "{{ ConfigurationRequirement }}"
        RequiresRestartForConfigurationUpdate: {{ RequiresRestartForConfigurationUpdate }}
    - name: EngineVersion
      value: "{{ EngineVersion }}"
    - name: PackageVendingOptions
      description: |
        Configuration options for determining whether a package can be made available for use by other users.
      value:
        VendingEnabled: {{ VendingEnabled }}
    - name: PackageEncryptionOptions
      description: |
        Encryption options for a package.
      value:
        KmsKeyIdentifier: "{{ KmsKeyIdentifier }}"
        EncryptionEnabled: {{ EncryptionEnabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_package"
    values={[
        { label: 'associate_package', value: 'associate_package' },
        { label: 'associate_packages', value: 'associate_packages' },
        { label: 'update_package', value: 'update_package' },
        { label: 'update_package_scope', value: 'update_package_scope' }
    ]}
>
<TabItem value="associate_package">

Associates a package with an Amazon OpenSearch Service domain. For more information, see Custom packages for Amazon OpenSearch Service.

```sql
UPDATE aws.opensearch.packages
SET 
PrerequisitePackageIDList = '{{ PrerequisitePackageIDList }}',
AssociationConfiguration = '{{ AssociationConfiguration }}'
WHERE 
package_id = '{{ package_id }}' --required
AND domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
domain_package_details;
```
</TabItem>
<TabItem value="associate_packages">

Operation in the Amazon OpenSearch Service API for associating multiple packages with a domain simultaneously.

```sql
UPDATE aws.opensearch.packages
SET 
PackageList = '{{ PackageList }}',
DomainName = '{{ DomainName }}'
WHERE 
region = '{{ region }}' --required
AND PackageList = '{{ PackageList }}' --required
AND DomainName = '{{ DomainName }}' --required
RETURNING
domain_package_details_list;
```
</TabItem>
<TabItem value="update_package">

Updates a package for use with Amazon OpenSearch Service domains. For more information, see Custom packages for Amazon OpenSearch Service.

```sql
UPDATE aws.opensearch.packages
SET 
PackageID = '{{ PackageID }}',
PackageSource = '{{ PackageSource }}',
PackageDescription = '{{ PackageDescription }}',
CommitMessage = '{{ CommitMessage }}',
PackageConfiguration = '{{ PackageConfiguration }}',
PackageEncryptionOptions = '{{ PackageEncryptionOptions }}'
WHERE 
region = '{{ region }}' --required
AND PackageID = '{{ PackageID }}' --required
AND PackageSource = '{{ PackageSource }}' --required
RETURNING
package_details;
```
</TabItem>
<TabItem value="update_package_scope">

Updates the scope of a package. Scope of the package defines users who can view and associate a package.

```sql
UPDATE aws.opensearch.packages
SET 
PackageID = '{{ PackageID }}',
Operation = '{{ Operation }}',
PackageUserList = '{{ PackageUserList }}'
WHERE 
region = '{{ region }}' --required
AND PackageID = '{{ PackageID }}' --required
AND PackageUserList = '{{ PackageUserList }}' --required
RETURNING
operation,
package_id,
package_user_list;
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

Deletes an Amazon OpenSearch Service package. For more information, see Custom packages for Amazon OpenSearch Service.

```sql
DELETE FROM aws.opensearch.packages
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
        { label: 'dissociate_package', value: 'dissociate_package' },
        { label: 'dissociate_packages', value: 'dissociate_packages' }
    ]}
>
<TabItem value="dissociate_package">

Removes a package from the specified Amazon OpenSearch Service domain. The package can't be in use with any OpenSearch index for the dissociation to succeed. The package is still available in OpenSearch Service for association later. For more information, see Custom packages for Amazon OpenSearch Service.

```sql
EXEC aws.opensearch.packages.dissociate_package 
@package_id='{{ package_id }}' --required, 
@domain_name='{{ domain_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="dissociate_packages">

Dissociates multiple packages from a domain simultaneously.

```sql
EXEC aws.opensearch.packages.dissociate_packages 
@region='{{ region }}' --required 
@@json=
'{
"PackageList": "{{ PackageList }}", 
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
</Tabs>
