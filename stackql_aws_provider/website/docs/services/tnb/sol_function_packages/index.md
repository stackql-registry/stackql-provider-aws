--- 
title: sol_function_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - sol_function_packages
  - tnb
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

Creates, updates, deletes, gets or lists a <code>sol_function_packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sol_function_packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.tnb.sol_function_packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sol_function_package"
    values={[
        { label: 'get_sol_function_package', value: 'get_sol_function_package' },
        { label: 'list_sol_function_packages', value: 'list_sol_function_packages' }
    ]}
>
<TabItem value="get_sol_function_package">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Function package ID. (pattern: &lt;code&gt;^fp-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Function package ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(function-package/fp-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata related to the function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</td>
</tr>
<tr>
    <td><CopyableCode code="onboarding_state" /></td>
    <td><code>string</code></td>
    <td>Function package onboarding state. (CREATED, ONBOARDED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="operational_state" /></td>
    <td><code>string</code></td>
    <td>Function package operational state. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_state" /></td>
    <td><code>string</code></td>
    <td>Function package usage state. (IN_USE, NOT_IN_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="vnf_product_name" /></td>
    <td><code>string</code></td>
    <td>Network function product name.</td>
</tr>
<tr>
    <td><CopyableCode code="vnf_provider" /></td>
    <td><code>string</code></td>
    <td>Network function provider.</td>
</tr>
<tr>
    <td><CopyableCode code="vnfd_id" /></td>
    <td><code>string</code></td>
    <td>Function package descriptor ID.</td>
</tr>
<tr>
    <td><CopyableCode code="vnfd_version" /></td>
    <td><code>string</code></td>
    <td>Function package descriptor version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sol_function_packages">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the function package. (pattern: &lt;code&gt;^fp-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Function package ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(function-package/fp-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the function package.</td>
</tr>
<tr>
    <td><CopyableCode code="onboarding_state" /></td>
    <td><code>string</code></td>
    <td>Onboarding state of the function package. (CREATED, ONBOARDED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="operational_state" /></td>
    <td><code>string</code></td>
    <td>Operational state of the function package. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_state" /></td>
    <td><code>string</code></td>
    <td>Usage state of the function package. (IN_USE, NOT_IN_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="vnf_product_name" /></td>
    <td><code>string</code></td>
    <td>The product name for the network function.</td>
</tr>
<tr>
    <td><CopyableCode code="vnf_provider" /></td>
    <td><code>string</code></td>
    <td>Provider of the function package and the function package descriptor.</td>
</tr>
<tr>
    <td><CopyableCode code="vnfd_id" /></td>
    <td><code>string</code></td>
    <td>Identifies the function package and the function package descriptor.</td>
</tr>
<tr>
    <td><CopyableCode code="vnfd_version" /></td>
    <td><code>string</code></td>
    <td>Identifies the version of the function package descriptor.</td>
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
    <td><a href="#get_sol_function_package"><CopyableCode code="get_sol_function_package" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vnf_pkg_id"><code>vnf_pkg_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of an individual function package, such as the operational state and whether the package is in use. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network..</td>
</tr>
<tr>
    <td><a href="#list_sol_function_packages"><CopyableCode code="list_sol_function_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-nextpage_opaque_marker"><code>nextpage_opaque_marker</code></a></td>
    <td>Lists information about function packages. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</td>
</tr>
<tr>
    <td><a href="#create_sol_function_package"><CopyableCode code="create_sol_function_package" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network. For more information, see Function packages in the Amazon Web Services Telco Network Builder User Guide. Creating a function package is the first step for creating a network in AWS TNB. This request creates an empty container with an ID. The next step is to upload the actual CSAR zip file into that empty container. To upload function package content, see PutSolFunctionPackageContent.</td>
</tr>
<tr>
    <td><a href="#update_sol_function_package"><CopyableCode code="update_sol_function_package" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vnf_pkg_id"><code>vnf_pkg_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-operationalState"><code>operationalState</code></a></td>
    <td></td>
    <td>Updates the operational state of function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</td>
</tr>
<tr>
    <td><a href="#delete_sol_function_package"><CopyableCode code="delete_sol_function_package" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vnf_pkg_id"><code>vnf_pkg_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network. To delete a function package, the package must be in a disabled state. To disable a function package, see UpdateSolFunctionPackage.</td>
</tr>
<tr>
    <td><a href="#validate_sol_function_package_content"><CopyableCode code="validate_sol_function_package_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vnf_pkg_id"><code>vnf_pkg_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-file"><code>file</code></a></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Validates function package content. This can be used as a dry run before uploading function package content with PutSolFunctionPackageContent. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-vnf_pkg_id">
    <td><CopyableCode code="vnf_pkg_id" /></td>
    <td><code>string</code></td>
    <td>Function package ID.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>Function package content type.</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to include in the response.</td>
</tr>
<tr id="parameter-nextpage_opaque_marker">
    <td><CopyableCode code="nextpage_opaque_marker" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sol_function_package"
    values={[
        { label: 'get_sol_function_package', value: 'get_sol_function_package' },
        { label: 'list_sol_function_packages', value: 'list_sol_function_packages' }
    ]}
>
<TabItem value="get_sol_function_package">

Gets the details of an individual function package, such as the operational state and whether the package is in use. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network..

```sql
SELECT
id,
arn,
metadata,
onboarding_state,
operational_state,
tags,
usage_state,
vnf_product_name,
vnf_provider,
vnfd_id,
vnfd_version
FROM aws.tnb.sol_function_packages
WHERE vnf_pkg_id = '{{ vnf_pkg_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sol_function_packages">

Lists information about function packages. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.

```sql
SELECT
id,
arn,
metadata,
onboarding_state,
operational_state,
usage_state,
vnf_product_name,
vnf_provider,
vnfd_id,
vnfd_version
FROM aws.tnb.sol_function_packages
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND nextpage_opaque_marker = '{{ nextpage_opaque_marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sol_function_package"
    values={[
        { label: 'create_sol_function_package', value: 'create_sol_function_package' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sol_function_package">

Creates a function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network. For more information, see Function packages in the Amazon Web Services Telco Network Builder User Guide. Creating a function package is the first step for creating a network in AWS TNB. This request creates an empty container with an ID. The next step is to upload the actual CSAR zip file into that empty container. To upload function package content, see PutSolFunctionPackageContent.

```sql
INSERT INTO aws.tnb.sol_function_packages (
tags,
region
)
SELECT 
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn,
onboarding_state,
operational_state,
tags,
usage_state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sol_function_packages
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sol_function_packages resource.
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sol_function_package"
    values={[
        { label: 'update_sol_function_package', value: 'update_sol_function_package' }
    ]}
>
<TabItem value="update_sol_function_package">

Updates the operational state of function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.

```sql
UPDATE aws.tnb.sol_function_packages
SET 
operationalState = '{{ operationalState }}'
WHERE 
vnf_pkg_id = '{{ vnf_pkg_id }}' --required
AND region = '{{ region }}' --required
AND operationalState = '{{ operationalState }}' --required
RETURNING
operational_state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sol_function_package"
    values={[
        { label: 'delete_sol_function_package', value: 'delete_sol_function_package' }
    ]}
>
<TabItem value="delete_sol_function_package">

Deletes a function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network. To delete a function package, the package must be in a disabled state. To disable a function package, see UpdateSolFunctionPackage.

```sql
DELETE FROM aws.tnb.sol_function_packages
WHERE vnf_pkg_id = '{{ vnf_pkg_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_sol_function_package_content"
    values={[
        { label: 'validate_sol_function_package_content', value: 'validate_sol_function_package_content' }
    ]}
>
<TabItem value="validate_sol_function_package_content">

Validates function package content. This can be used as a dry run before uploading function package content with PutSolFunctionPackageContent. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.

```sql
EXEC aws.tnb.sol_function_packages.validate_sol_function_package_content 
@vnf_pkg_id='{{ vnf_pkg_id }}' --required, 
@region='{{ region }}' --required, 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"file": "{{ file }}"
}'
;
```
</TabItem>
</Tabs>
