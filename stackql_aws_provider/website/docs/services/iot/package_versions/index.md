--- 
title: package_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - package_versions
  - iot
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.package_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_package_version"
    values={[
        { label: 'get_package_version', value: 'get_package_version' },
        { label: 'list_package_versions', value: 'list_package_versions' }
    ]}
>
<TabItem value="get_package_version">

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
    <td><CopyableCode code="artifact" /></td>
    <td><code>object</code></td>
    <td>A specific package version artifact associated with a software package version.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Metadata that were added to the package version that can be used to define a package version’s configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the package version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The package version description. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorReason" /></td>
    <td><code>string</code></td>
    <td>Error reason for a package version failure during creation or update.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the package version was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="packageName" /></td>
    <td><code>string</code></td>
    <td>The name of the software package. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="packageVersionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the package version. (pattern: &lt;code&gt;^arn:&#91;!-~&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recipe" /></td>
    <td><code>string</code></td>
    <td>The inline job document associated with a software package version used for a quick job deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="sbom" /></td>
    <td><code>object</code></td>
    <td>A specific software bill of matrerials associated with a software package version.</td>
</tr>
<tr>
    <td><CopyableCode code="sbomValidationStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the validation for a new software bill of materials added to a software package version. (IN_PROGRESS, FAILED, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status associated to the package version. For more information, see Package version lifecycle. (DRAFT, PUBLISHED, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="versionName" /></td>
    <td><code>string</code></td>
    <td>The name of the package version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.&#93;+&lt;/code&gt;)</td>
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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the package version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the package version was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="packageName" /></td>
    <td><code>string</code></td>
    <td>The name of the associated software package. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the package version. For more information, see Package version lifecycle. (DRAFT, PUBLISHED, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="versionName" /></td>
    <td><code>string</code></td>
    <td>The name of the target package version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_package_version"><CopyableCode code="get_package_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified package version. Requires permission to access the GetPackageVersion action.</td>
</tr>
<tr>
    <td><a href="#list_package_versions"><CopyableCode code="list_package_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the software package versions associated to the account. Requires permission to access the ListPackageVersions action.</td>
</tr>
<tr>
    <td><a href="#create_package_version"><CopyableCode code="create_package_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Creates a new version for an existing IoT software package. Requires permission to access the CreatePackageVersion and GetIndexingConfiguration actions.</td>
</tr>
<tr>
    <td><a href="#associate_sbom_with_package_version"><CopyableCode code="associate_sbom_with_package_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sbom"><code>sbom</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Associates the selected software bill of materials (SBOM) with a specific software package version. Requires permission to access the AssociateSbomWithPackageVersion action.</td>
</tr>
<tr>
    <td><a href="#update_package_version"><CopyableCode code="update_package_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Updates the supported fields for a specific package version. Requires permission to access the UpdatePackageVersion and GetIndexingConfiguration actions.</td>
</tr>
<tr>
    <td><a href="#delete_package_version"><CopyableCode code="delete_package_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a specific version from a software package. Note: If a package version is designated as default, you must remove the designation from the software package using the UpdatePackage action.</td>
</tr>
<tr>
    <td><a href="#disassociate_sbom_from_package_version"><CopyableCode code="disassociate_sbom_from_package_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Disassociates the selected software bill of materials (SBOM) from a specific software package version. Requires permission to access the DisassociateSbomWithPackageVersion action.</td>
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
<tr id="parameter-package_name">
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The name of the new software package.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_name">
    <td><CopyableCode code="version_name" /></td>
    <td><code>string</code></td>
    <td>The name of the new package version.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the package version. For more information, see Package version lifecycle.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_package_version"
    values={[
        { label: 'get_package_version', value: 'get_package_version' },
        { label: 'list_package_versions', value: 'list_package_versions' }
    ]}
>
<TabItem value="get_package_version">

Gets information about the specified package version. Requires permission to access the GetPackageVersion action.

```sql
SELECT
artifact,
attributes,
creationDate,
description,
errorReason,
lastModifiedDate,
packageName,
packageVersionArn,
recipe,
sbom,
sbomValidationStatus,
status,
versionName
FROM aws.iot.package_versions
WHERE package_name = '{{ package_name }}' -- required
AND version_name = '{{ version_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_package_versions">

Lists the software package versions associated to the account. Requires permission to access the ListPackageVersions action.

```sql
SELECT
creationDate,
lastModifiedDate,
packageName,
status,
versionName
FROM aws.iot.package_versions
WHERE package_name = '{{ package_name }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_package_version"
    values={[
        { label: 'create_package_version', value: 'create_package_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_package_version">

Creates a new version for an existing IoT software package. Requires permission to access the CreatePackageVersion and GetIndexingConfiguration actions.

```sql
INSERT INTO aws.iot.package_versions (
description,
attributes,
artifact,
recipe,
tags,
package_name,
version_name,
region,
clientToken
)
SELECT 
'{{ description }}',
'{{ attributes }}',
'{{ artifact }}',
'{{ recipe }}',
'{{ tags }}',
'{{ package_name }}',
'{{ version_name }}',
'{{ region }}',
'{{ clientToken }}'
RETURNING
attributes,
description,
errorReason,
packageName,
packageVersionArn,
status,
versionName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: package_versions
  props:
    - name: package_name
      value: "{{ package_name }}"
      description: Required parameter for the package_versions resource.
    - name: version_name
      value: "{{ version_name }}"
      description: Required parameter for the package_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the package_versions resource.
    - name: description
      value: "{{ description }}"
    - name: attributes
      value: "{{ attributes }}"
    - name: artifact
      description: |
        A specific package version artifact associated with a software package version.
      value:
        s3Location:
          bucket: "{{ bucket }}"
          key: "{{ key }}"
          version: "{{ version }}"
    - name: recipe
      value: "{{ recipe }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
      description: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_sbom_with_package_version"
    values={[
        { label: 'associate_sbom_with_package_version', value: 'associate_sbom_with_package_version' },
        { label: 'update_package_version', value: 'update_package_version' }
    ]}
>
<TabItem value="associate_sbom_with_package_version">

Associates the selected software bill of materials (SBOM) with a specific software package version. Requires permission to access the AssociateSbomWithPackageVersion action.

```sql
UPDATE aws.iot.package_versions
SET 
sbom = '{{ sbom }}'
WHERE 
package_name = '{{ package_name }}' --required
AND version_name = '{{ version_name }}' --required
AND region = '{{ region }}' --required
AND sbom = '{{ sbom }}' --required
AND clientToken = '{{ clientToken}}'
RETURNING
packageName,
sbom,
sbomValidationStatus,
versionName;
```
</TabItem>
<TabItem value="update_package_version">

Updates the supported fields for a specific package version. Requires permission to access the UpdatePackageVersion and GetIndexingConfiguration actions.

```sql
UPDATE aws.iot.package_versions
SET 
description = '{{ description }}',
attributes = '{{ attributes }}',
artifact = '{{ artifact }}',
action = '{{ action }}',
recipe = '{{ recipe }}'
WHERE 
package_name = '{{ package_name }}' --required
AND version_name = '{{ version_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_package_version"
    values={[
        { label: 'delete_package_version', value: 'delete_package_version' }
    ]}
>
<TabItem value="delete_package_version">

Deletes a specific version from a software package. Note: If a package version is designated as default, you must remove the designation from the software package using the UpdatePackage action.

```sql
DELETE FROM aws.iot.package_versions
WHERE package_name = '{{ package_name }}' --required
AND version_name = '{{ version_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_sbom_from_package_version"
    values={[
        { label: 'disassociate_sbom_from_package_version', value: 'disassociate_sbom_from_package_version' }
    ]}
>
<TabItem value="disassociate_sbom_from_package_version">

Disassociates the selected software bill of materials (SBOM) from a specific software package version. Requires permission to access the DisassociateSbomWithPackageVersion action.

```sql
EXEC aws.iot.package_versions.disassociate_sbom_from_package_version 
@package_name='{{ package_name }}' --required, 
@version_name='{{ version_name }}' --required, 
@region='{{ region }}' --required, 
@clientToken='{{ clientToken }}'
;
```
</TabItem>
</Tabs>
