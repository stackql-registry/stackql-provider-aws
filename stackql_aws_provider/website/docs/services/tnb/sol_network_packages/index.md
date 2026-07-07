--- 
title: sol_network_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - sol_network_packages
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

Creates, updates, deletes, gets or lists a <code>sol_network_packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sol_network_packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.tnb.sol_network_packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sol_network_package"
    values={[
        { label: 'get_sol_network_package', value: 'get_sol_network_package' },
        { label: 'list_sol_network_packages', value: 'list_sol_network_packages' }
    ]}
>
<TabItem value="get_sol_network_package">

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
    <td>Network package ID. (pattern: &lt;code&gt;^np-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Network package ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(network-package/np-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with a network package. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</td>
</tr>
<tr>
    <td><CopyableCode code="nsdId" /></td>
    <td><code>string</code></td>
    <td>Network service descriptor ID. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdName" /></td>
    <td><code>string</code></td>
    <td>Network service descriptor name.</td>
</tr>
<tr>
    <td><CopyableCode code="nsdOnboardingState" /></td>
    <td><code>string</code></td>
    <td>Network service descriptor onboarding state. (CREATED, ONBOARDED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdOperationalState" /></td>
    <td><code>string</code></td>
    <td>Network service descriptor operational state. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdUsageState" /></td>
    <td><code>string</code></td>
    <td>Network service descriptor usage state. (IN_USE, NOT_IN_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdVersion" /></td>
    <td><code>string</code></td>
    <td>Network service descriptor version.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</td>
</tr>
<tr>
    <td><CopyableCode code="vnfPkgIds" /></td>
    <td><code>array</code></td>
    <td>Identifies the function package for the function package descriptor referenced by the onboarded network package.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sol_network_packages">

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
    <td>ID of the individual network package. (pattern: &lt;code&gt;^np-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Network package ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(network-package/np-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the network package.</td>
</tr>
<tr>
    <td><CopyableCode code="nsdDesigner" /></td>
    <td><code>string</code></td>
    <td>Designer of the onboarded network service descriptor in the network package.</td>
</tr>
<tr>
    <td><CopyableCode code="nsdId" /></td>
    <td><code>string</code></td>
    <td>ID of the network service descriptor on which the network package is based.</td>
</tr>
<tr>
    <td><CopyableCode code="nsdInvariantId" /></td>
    <td><code>string</code></td>
    <td>Identifies a network service descriptor in a version independent manner.</td>
</tr>
<tr>
    <td><CopyableCode code="nsdName" /></td>
    <td><code>string</code></td>
    <td>Name of the onboarded network service descriptor in the network package.</td>
</tr>
<tr>
    <td><CopyableCode code="nsdOnboardingState" /></td>
    <td><code>string</code></td>
    <td>Onboarding state of the network service descriptor in the network package. (CREATED, ONBOARDED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdOperationalState" /></td>
    <td><code>string</code></td>
    <td>Operational state of the network service descriptor in the network package. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdUsageState" /></td>
    <td><code>string</code></td>
    <td>Usage state of the network service descriptor in the network package. (IN_USE, NOT_IN_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdVersion" /></td>
    <td><code>string</code></td>
    <td>Version of the onboarded network service descriptor in the network package.</td>
</tr>
<tr>
    <td><CopyableCode code="vnfPkgIds" /></td>
    <td><code>array</code></td>
    <td>Identifies the function package for the function package descriptor referenced by the onboarded network package.</td>
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
    <td><a href="#get_sol_network_package"><CopyableCode code="get_sol_network_package" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nsd_info_id"><code>nsd_info_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a network package. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</td>
</tr>
<tr>
    <td><a href="#list_sol_network_packages"><CopyableCode code="list_sol_network_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-nextpage_opaque_marker"><code>nextpage_opaque_marker</code></a></td>
    <td>Lists network packages. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</td>
</tr>
<tr>
    <td><a href="#create_sol_network_package"><CopyableCode code="create_sol_network_package" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a network package. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. For more information, see Network instances in the Amazon Web Services Telco Network Builder User Guide. A network package consists of a network service descriptor (NSD) file (required) and any additional files (optional), such as scripts specific to your needs. For example, if you have multiple function packages in your network package, you can use the NSD to define which network functions should run in certain VPCs, subnets, or EKS clusters. This request creates an empty network package container with an ID. Once you create a network package, you can upload the network package content using PutSolNetworkPackageContent.</td>
</tr>
<tr>
    <td><a href="#update_sol_network_package"><CopyableCode code="update_sol_network_package" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-nsd_info_id"><code>nsd_info_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-nsdOperationalState"><code>nsdOperationalState</code></a></td>
    <td></td>
    <td>Updates the operational state of a network package. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.</td>
</tr>
<tr>
    <td><a href="#delete_sol_network_package"><CopyableCode code="delete_sol_network_package" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nsd_info_id"><code>nsd_info_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes network package. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. To delete a network package, the package must be in a disable state. To disable a network package, see UpdateSolNetworkPackage.</td>
</tr>
<tr>
    <td><a href="#validate_sol_network_package_content"><CopyableCode code="validate_sol_network_package_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nsd_info_id"><code>nsd_info_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-file"><code>file</code></a></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Validates network package content. This can be used as a dry run before uploading network package content with PutSolNetworkPackageContent. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</td>
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
<tr id="parameter-nsd_info_id">
    <td><CopyableCode code="nsd_info_id" /></td>
    <td><code>string</code></td>
    <td>Network service descriptor file.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>Network package content type.</td>
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
    defaultValue="get_sol_network_package"
    values={[
        { label: 'get_sol_network_package', value: 'get_sol_network_package' },
        { label: 'list_sol_network_packages', value: 'list_sol_network_packages' }
    ]}
>
<TabItem value="get_sol_network_package">

Gets the details of a network package. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.

```sql
SELECT
id,
arn,
metadata,
nsdId,
nsdName,
nsdOnboardingState,
nsdOperationalState,
nsdUsageState,
nsdVersion,
tags,
vnfPkgIds
FROM aws.tnb.sol_network_packages
WHERE nsd_info_id = '{{ nsd_info_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sol_network_packages">

Lists network packages. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.

```sql
SELECT
id,
arn,
metadata,
nsdDesigner,
nsdId,
nsdInvariantId,
nsdName,
nsdOnboardingState,
nsdOperationalState,
nsdUsageState,
nsdVersion,
vnfPkgIds
FROM aws.tnb.sol_network_packages
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND nextpage_opaque_marker = '{{ nextpage_opaque_marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sol_network_package"
    values={[
        { label: 'create_sol_network_package', value: 'create_sol_network_package' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sol_network_package">

Creates a network package. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. For more information, see Network instances in the Amazon Web Services Telco Network Builder User Guide. A network package consists of a network service descriptor (NSD) file (required) and any additional files (optional), such as scripts specific to your needs. For example, if you have multiple function packages in your network package, you can use the NSD to define which network functions should run in certain VPCs, subnets, or EKS clusters. This request creates an empty network package container with an ID. Once you create a network package, you can upload the network package content using PutSolNetworkPackageContent.

```sql
INSERT INTO aws.tnb.sol_network_packages (
tags,
region
)
SELECT 
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn,
nsdOnboardingState,
nsdOperationalState,
nsdUsageState,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sol_network_packages
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sol_network_packages resource.
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sol_network_package"
    values={[
        { label: 'update_sol_network_package', value: 'update_sol_network_package' }
    ]}
>
<TabItem value="update_sol_network_package">

Updates the operational state of a network package. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.

```sql
UPDATE aws.tnb.sol_network_packages
SET 
nsdOperationalState = '{{ nsdOperationalState }}'
WHERE 
nsd_info_id = '{{ nsd_info_id }}' --required
AND region = '{{ region }}' --required
AND nsdOperationalState = '{{ nsdOperationalState }}' --required
RETURNING
nsdOperationalState;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sol_network_package"
    values={[
        { label: 'delete_sol_network_package', value: 'delete_sol_network_package' }
    ]}
>
<TabItem value="delete_sol_network_package">

Deletes network package. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. To delete a network package, the package must be in a disable state. To disable a network package, see UpdateSolNetworkPackage.

```sql
DELETE FROM aws.tnb.sol_network_packages
WHERE nsd_info_id = '{{ nsd_info_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_sol_network_package_content"
    values={[
        { label: 'validate_sol_network_package_content', value: 'validate_sol_network_package_content' }
    ]}
>
<TabItem value="validate_sol_network_package_content">

Validates network package content. This can be used as a dry run before uploading network package content with PutSolNetworkPackageContent. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.

```sql
EXEC aws.tnb.sol_network_packages.validate_sol_network_package_content 
@nsd_info_id='{{ nsd_info_id }}' --required, 
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
