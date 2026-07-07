--- 
title: license_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - license_configurations
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>license_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.license_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_license_configuration"
    values={[
        { label: 'get_license_configuration', value: 'get_license_configuration' },
        { label: 'list_license_configurations', value: 'list_license_configurations' }
    ]}
>
<TabItem value="get_license_configuration">

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
    <td><CopyableCode code="AutomatedDiscoveryInformation" /></td>
    <td><code>object</code></td>
    <td>Automated discovery information.</td>
</tr>
<tr>
    <td><CopyableCode code="ConsumedLicenseSummaryList" /></td>
    <td><code>array</code></td>
    <td>Summaries of the licenses consumed by resources.</td>
</tr>
<tr>
    <td><CopyableCode code="ConsumedLicenses" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of licenses assigned to resources.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Description of the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="DisassociateWhenNotFound" /></td>
    <td><code>boolean</code></td>
    <td>When true, disassociates a resource when software is uninstalled.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseConfigurationId" /></td>
    <td><code>string</code></td>
    <td>Unique ID for the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of available licenses.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseCountHardLimit" /></td>
    <td><code>boolean</code></td>
    <td>Sets the number of available licenses as a hard limit.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseCountingType" /></td>
    <td><code>string</code></td>
    <td>Dimension for which the licenses are counted. (vCPU, Instance, Core, Socket)</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseExpiry" /></td>
    <td><code>integer (int64)</code></td>
    <td>License Expiry.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseRules" /></td>
    <td><code>array</code></td>
    <td>License rules.</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedResourceSummaryList" /></td>
    <td><code>array</code></td>
    <td>Summaries of the managed resources.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>Account ID of the owner of the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductInformationList" /></td>
    <td><code>array</code></td>
    <td>Product information.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>License configuration status.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Tags for the license configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_license_configurations">

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
    <td><CopyableCode code="AutomatedDiscoveryInformation" /></td>
    <td><code>object</code></td>
    <td>Automated discovery information.</td>
</tr>
<tr>
    <td><CopyableCode code="ConsumedLicenseSummaryList" /></td>
    <td><code>array</code></td>
    <td>Summaries for licenses consumed by various resources.</td>
</tr>
<tr>
    <td><CopyableCode code="ConsumedLicenses" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of licenses consumed.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Description of the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="DisassociateWhenNotFound" /></td>
    <td><code>boolean</code></td>
    <td>When true, disassociates a resource when software is uninstalled.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseConfigurationId" /></td>
    <td><code>string</code></td>
    <td>Unique ID of the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of licenses managed by the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseCountHardLimit" /></td>
    <td><code>boolean</code></td>
    <td>Number of available licenses as a hard limit.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseCountingType" /></td>
    <td><code>string</code></td>
    <td>Dimension to use to track the license inventory. (vCPU, Instance, Core, Socket)</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseExpiry" /></td>
    <td><code>integer (int64)</code></td>
    <td>License configuration expiry time in Unix timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseRules" /></td>
    <td><code>array</code></td>
    <td>License rules.</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedResourceSummaryList" /></td>
    <td><code>array</code></td>
    <td>Summaries for managed resources.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the license configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>Account ID of the license configuration's owner.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductInformationList" /></td>
    <td><code>array</code></td>
    <td>Product information.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the license configuration.</td>
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
    <td><a href="#get_license_configuration"><CopyableCode code="get_license_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information about the specified license configuration.</td>
</tr>
<tr>
    <td><a href="#list_license_configurations"><CopyableCode code="list_license_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the license configurations for your account.</td>
</tr>
<tr>
    <td><a href="#create_license_configuration"><CopyableCode code="create_license_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LicenseCountingType"><code>LicenseCountingType</code></a></td>
    <td></td>
    <td>Creates a license configuration. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</td>
</tr>
<tr>
    <td><a href="#update_license_configuration"><CopyableCode code="update_license_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LicenseConfigurationArn"><code>LicenseConfigurationArn</code></a></td>
    <td></td>
    <td>Modifies the attributes of an existing license configuration.</td>
</tr>
<tr>
    <td><a href="#delete_license_configuration"><CopyableCode code="delete_license_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified license configuration. You cannot delete a license configuration that is in use.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_license_configuration"
    values={[
        { label: 'get_license_configuration', value: 'get_license_configuration' },
        { label: 'list_license_configurations', value: 'list_license_configurations' }
    ]}
>
<TabItem value="get_license_configuration">

Gets detailed information about the specified license configuration.

```sql
SELECT
AutomatedDiscoveryInformation,
ConsumedLicenseSummaryList,
ConsumedLicenses,
Description,
DisassociateWhenNotFound,
LicenseConfigurationArn,
LicenseConfigurationId,
LicenseCount,
LicenseCountHardLimit,
LicenseCountingType,
LicenseExpiry,
LicenseRules,
ManagedResourceSummaryList,
Name,
OwnerAccountId,
ProductInformationList,
Status,
Tags
FROM aws.license_manager.license_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_license_configurations">

Lists the license configurations for your account.

```sql
SELECT
AutomatedDiscoveryInformation,
ConsumedLicenseSummaryList,
ConsumedLicenses,
Description,
DisassociateWhenNotFound,
LicenseConfigurationArn,
LicenseConfigurationId,
LicenseCount,
LicenseCountHardLimit,
LicenseCountingType,
LicenseExpiry,
LicenseRules,
ManagedResourceSummaryList,
Name,
OwnerAccountId,
ProductInformationList,
Status
FROM aws.license_manager.license_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_license_configuration"
    values={[
        { label: 'create_license_configuration', value: 'create_license_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_license_configuration">

Creates a license configuration. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.

```sql
INSERT INTO aws.license_manager.license_configurations (
Name,
Description,
LicenseCountingType,
LicenseCount,
LicenseCountHardLimit,
LicenseRules,
Tags,
DisassociateWhenNotFound,
ProductInformationList,
LicenseExpiry,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ LicenseCountingType }}' /* required */,
{{ LicenseCount }},
{{ LicenseCountHardLimit }},
'{{ LicenseRules }}',
'{{ Tags }}',
{{ DisassociateWhenNotFound }},
'{{ ProductInformationList }}',
{{ LicenseExpiry }},
'{{ region }}'
RETURNING
LicenseConfigurationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the license_configurations resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Name of the license configuration.
    - name: Description
      value: "{{ Description }}"
      description: |
        Description of the license configuration.
    - name: LicenseCountingType
      value: "{{ LicenseCountingType }}"
      description: |
        Dimension used to track the license inventory.
      valid_values: ['vCPU', 'Instance', 'Core', 'Socket']
    - name: LicenseCount
      value: {{ LicenseCount }}
      description: |
        Number of licenses managed by the license configuration.
    - name: LicenseCountHardLimit
      value: {{ LicenseCountHardLimit }}
      description: |
        Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.
    - name: LicenseRules
      value:
        - "{{ LicenseRules }}"
      description: |
        License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). The available rules vary by dimension, as follows. Cores dimension: allowedTenancy | licenseAffinityToHost | maximumCores | minimumCores Instances dimension: allowedTenancy | maximumVcpus | minimumVcpus Sockets dimension: allowedTenancy | licenseAffinityToHost | maximumSockets | minimumSockets vCPUs dimension: allowedTenancy | honorVcpuOptimization | maximumVcpus | minimumVcpus The unit for licenseAffinityToHost is days and the range is 1 to 180. The possible values for allowedTenancy are EC2-Default, EC2-DedicatedHost, and EC2-DedicatedInstance. The possible values for honorVcpuOptimization are True and False.
    - name: Tags
      description: |
        Tags to add to the license configuration.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: DisassociateWhenNotFound
      value: {{ DisassociateWhenNotFound }}
      description: |
        When true, disassociates a resource when software is uninstalled.
    - name: ProductInformationList
      description: |
        Product information.
      value:
        - ResourceType: "{{ ResourceType }}"
          ProductInformationFilterList: "{{ ProductInformationFilterList }}"
    - name: LicenseExpiry
      value: {{ LicenseExpiry }}
      description: |
        License configuration expiry.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_license_configuration"
    values={[
        { label: 'update_license_configuration', value: 'update_license_configuration' }
    ]}
>
<TabItem value="update_license_configuration">

Modifies the attributes of an existing license configuration.

```sql
UPDATE aws.license_manager.license_configurations
SET 
LicenseConfigurationArn = '{{ LicenseConfigurationArn }}',
LicenseConfigurationStatus = '{{ LicenseConfigurationStatus }}',
LicenseRules = '{{ LicenseRules }}',
LicenseCount = {{ LicenseCount }},
LicenseCountHardLimit = {{ LicenseCountHardLimit }},
Name = '{{ Name }}',
Description = '{{ Description }}',
ProductInformationList = '{{ ProductInformationList }}',
DisassociateWhenNotFound = {{ DisassociateWhenNotFound }},
LicenseExpiry = {{ LicenseExpiry }}
WHERE 
region = '{{ region }}' --required
AND LicenseConfigurationArn = '{{ LicenseConfigurationArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_license_configuration"
    values={[
        { label: 'delete_license_configuration', value: 'delete_license_configuration' }
    ]}
>
<TabItem value="delete_license_configuration">

Deletes the specified license configuration. You cannot delete a license configuration that is in use.

```sql
DELETE FROM aws.license_manager.license_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
