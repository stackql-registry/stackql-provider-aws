--- 
title: exascale_db_storage_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - exascale_db_storage_vaults
  - odb
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

Creates, updates, deletes, gets or lists an <code>exascale_db_storage_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exascale_db_storage_vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.exascale_db_storage_vaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_exascale_db_storage_vault"
    values={[
        { label: 'get_exascale_db_storage_vault', value: 'get_exascale_db_storage_vault' },
        { label: 'list_exascale_db_storage_vaults', value: 'list_exascale_db_storage_vaults' }
    ]}
>
<TabItem value="get_exascale_db_storage_vault">

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
    <td><CopyableCode code="additional_flash_cache_in_percent" /></td>
    <td><code>integer</code></td>
    <td>The additional flash cache percentage for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="attached_shape_attributes" /></td>
    <td><code>array</code></td>
    <td>The list of shape attributes attached to the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale_limit_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The autoscale limit in gigabytes (GB) for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Exascale storage vault was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="exascale_db_storage_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Exascale storage vault. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exascale_db_storage_vault_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Exascale storage vault. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="high_capacity_database_storage" /></td>
    <td><code>object</code></td>
    <td>The high-capacity database storage details for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="is_autoscale_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether autoscaling is enabled for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_url" /></td>
    <td><code>string</code></td>
    <td>The HTTPS link to the Exascale storage vault in Oracle Cloud Infrastructure (OCI).</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the Exascale storage vault, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Exascale storage vault. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_cluster_arns" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Resource Names (ARNs) of the VM clusters associated with this Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_cluster_count" /></td>
    <td><code>integer</code></td>
    <td>The number of VM clusters associated with this Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_cluster_ids" /></td>
    <td><code>array</code></td>
    <td>The list of unique identifiers of the VM clusters associated with this Exascale storage vault.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_exascale_db_storage_vaults">

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
    <td><CopyableCode code="additional_flash_cache_in_percent" /></td>
    <td><code>integer</code></td>
    <td>The additional flash cache percentage for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="attached_shape_attributes" /></td>
    <td><code>array</code></td>
    <td>The list of shape attributes attached to the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale_limit_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The autoscale limit in gigabytes (GB) for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Exascale storage vault was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="exascale_db_storage_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Exascale storage vault. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exascale_db_storage_vault_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Exascale storage vault. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="high_capacity_database_storage" /></td>
    <td><code>object</code></td>
    <td>The high-capacity database storage details for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="is_autoscale_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether autoscaling is enabled for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_resource_anchor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_url" /></td>
    <td><code>string</code></td>
    <td>The HTTPS link to the Exascale storage vault in Oracle Cloud Infrastructure (OCI).</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the Exascale storage vault, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Exascale storage vault. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_cluster_arns" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Resource Names (ARNs) of the VM clusters associated with this Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_cluster_count" /></td>
    <td><code>integer</code></td>
    <td>The number of VM clusters associated with this Exascale storage vault.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_cluster_ids" /></td>
    <td><code>array</code></td>
    <td>The list of unique identifiers of the VM clusters associated with this Exascale storage vault.</td>
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
    <td><a href="#get_exascale_db_storage_vault"><CopyableCode code="get_exascale_db_storage_vault" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified Exascale storage vault.</td>
</tr>
<tr>
    <td><a href="#list_exascale_db_storage_vaults"><CopyableCode code="list_exascale_db_storage_vaults" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the Exascale storage vaults owned by your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_exascale_db_storage_vault"><CopyableCode code="create_exascale_db_storage_vault" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-highCapacityDatabaseStorageTotalSizeInGBs"><code>highCapacityDatabaseStorageTotalSizeInGBs</code></a></td>
    <td></td>
    <td>Creates an Exascale storage vault.</td>
</tr>
<tr>
    <td><a href="#update_exascale_db_storage_vault"><CopyableCode code="update_exascale_db_storage_vault" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a></td>
    <td></td>
    <td>Updates the specified Exascale storage vault.</td>
</tr>
<tr>
    <td><a href="#delete_exascale_db_storage_vault"><CopyableCode code="delete_exascale_db_storage_vault" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Exascale storage vault.</td>
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
    defaultValue="get_exascale_db_storage_vault"
    values={[
        { label: 'get_exascale_db_storage_vault', value: 'get_exascale_db_storage_vault' },
        { label: 'list_exascale_db_storage_vaults', value: 'list_exascale_db_storage_vaults' }
    ]}
>
<TabItem value="get_exascale_db_storage_vault">

Returns information about the specified Exascale storage vault.

```sql
SELECT
additional_flash_cache_in_percent,
attached_shape_attributes,
autoscale_limit_in_gbs,
availability_zone,
availability_zone_id,
created_at,
description,
display_name,
exascale_db_storage_vault_arn,
exascale_db_storage_vault_id,
high_capacity_database_storage,
is_autoscale_enabled,
oci_resource_anchor_name,
oci_url,
ocid,
percent_progress,
status,
status_reason,
time_zone,
vm_cluster_arns,
vm_cluster_count,
vm_cluster_ids
FROM aws.odb.exascale_db_storage_vaults
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_exascale_db_storage_vaults">

Returns information about the Exascale storage vaults owned by your Amazon Web Services account.

```sql
SELECT
additional_flash_cache_in_percent,
attached_shape_attributes,
autoscale_limit_in_gbs,
availability_zone,
availability_zone_id,
created_at,
description,
display_name,
exascale_db_storage_vault_arn,
exascale_db_storage_vault_id,
high_capacity_database_storage,
is_autoscale_enabled,
oci_resource_anchor_name,
oci_url,
ocid,
percent_progress,
status,
status_reason,
time_zone,
vm_cluster_arns,
vm_cluster_count,
vm_cluster_ids
FROM aws.odb.exascale_db_storage_vaults
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_exascale_db_storage_vault"
    values={[
        { label: 'create_exascale_db_storage_vault', value: 'create_exascale_db_storage_vault' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_exascale_db_storage_vault">

Creates an Exascale storage vault.

```sql
INSERT INTO aws.odb.exascale_db_storage_vaults (
displayName,
highCapacityDatabaseStorageTotalSizeInGBs,
additionalFlashCacheInPercent,
autoscaleLimitInGBs,
availabilityZoneId,
availabilityZone,
description,
isAutoscaleEnabled,
tags,
timeZone,
clientToken,
region
)
SELECT 
'{{ displayName }}' /* required */,
{{ highCapacityDatabaseStorageTotalSizeInGBs }} /* required */,
{{ additionalFlashCacheInPercent }},
{{ autoscaleLimitInGBs }},
'{{ availabilityZoneId }}',
'{{ availabilityZone }}',
'{{ description }}',
{{ isAutoscaleEnabled }},
'{{ tags }}',
'{{ timeZone }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
display_name,
exascale_db_storage_vault_id,
status,
status_reason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: exascale_db_storage_vaults
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the exascale_db_storage_vaults resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the Exascale storage vault.
    - name: highCapacityDatabaseStorageTotalSizeInGBs
      value: {{ highCapacityDatabaseStorageTotalSizeInGBs }}
      description: |
        The total size of the high-capacity database storage, in gigabytes (GB), for the Exascale storage vault.
    - name: additionalFlashCacheInPercent
      value: {{ additionalFlashCacheInPercent }}
      description: |
        The additional flash cache percentage for the Exascale storage vault.
    - name: autoscaleLimitInGBs
      value: {{ autoscaleLimitInGBs }}
      description: |
        The autoscale limit in gigabytes (GB) for the Exascale storage vault.
    - name: availabilityZoneId
      value: "{{ availabilityZoneId }}"
      description: |
        The Availability Zone ID for the Exascale storage vault.
    - name: availabilityZone
      value: "{{ availabilityZone }}"
      description: |
        The Availability Zone for the Exascale storage vault.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the Exascale storage vault.
    - name: isAutoscaleEnabled
      value: {{ isAutoscaleEnabled }}
      description: |
        Specifies whether autoscaling is enabled for the Exascale storage vault.
    - name: tags
      value: "{{ tags }}"
      description: |
        The list of resource tags to apply to the Exascale storage vault.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone for the Exascale storage vault.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, the Amazon Web Services SDK automatically generates one and uses it for the request to ensure idempotency. The client token is valid for up to 24 hours after it's first used.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_exascale_db_storage_vault"
    values={[
        { label: 'update_exascale_db_storage_vault', value: 'update_exascale_db_storage_vault' }
    ]}
>
<TabItem value="update_exascale_db_storage_vault">

Updates the specified Exascale storage vault.

```sql
UPDATE aws.odb.exascale_db_storage_vaults
SET 
exascaleDbStorageVaultId = '{{ exascaleDbStorageVaultId }}',
additionalFlashCacheInPercent = {{ additionalFlashCacheInPercent }},
autoscaleLimitInGBs = {{ autoscaleLimitInGBs }},
description = '{{ description }}',
displayName = '{{ displayName }}',
highCapacityDatabaseStorageTotalSizeInGBs = {{ highCapacityDatabaseStorageTotalSizeInGBs }},
isAutoscaleEnabled = {{ isAutoscaleEnabled }}
WHERE 
region = '{{ region }}' --required
AND exascaleDbStorageVaultId = '{{ exascaleDbStorageVaultId }}' --required
RETURNING
display_name,
exascale_db_storage_vault_id,
status,
status_reason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_exascale_db_storage_vault"
    values={[
        { label: 'delete_exascale_db_storage_vault', value: 'delete_exascale_db_storage_vault' }
    ]}
>
<TabItem value="delete_exascale_db_storage_vault">

Deletes the specified Exascale storage vault.

```sql
DELETE FROM aws.odb.exascale_db_storage_vaults
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
