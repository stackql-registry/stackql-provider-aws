--- 
title: allowed_images_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - allowed_images_settings
  - ec2
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

Creates, updates, deletes, gets or lists an <code>allowed_images_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="allowed_images_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.allowed_images_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_allowed_images_settings"
    values={[
        { label: 'get_allowed_images_settings', value: 'get_allowed_images_settings' }
    ]}
>
<TabItem value="get_allowed_images_settings">

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
    <td><CopyableCode code="ImageCriteria" /></td>
    <td><code>string</code></td>
    <td>The list of criteria for images that are discoverable and usable in the account in the specified Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedBy" /></td>
    <td><code>string</code></td>
    <td>The entity that manages the Allowed AMIs settings. Possible values include: account - The Allowed AMIs settings is managed by the account. declarative-policy - The Allowed AMIs settings is managed by a declarative policy and can't be modified by the account.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the Allowed AMIs setting at the account level in the specified Amazon Web Services Region. Possible values: disabled: All AMIs are allowed. audit-mode: All AMIs are allowed, but the ImageAllowed field is set to true if the AMI would be allowed with the current list of criteria if allowed AMIs was enabled. enabled: Only AMIs matching the image criteria are discoverable and available for use.</td>
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
    <td><a href="#get_allowed_images_settings"><CopyableCode code="get_allowed_images_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets the current state of the Allowed AMIs setting and the list of Allowed AMIs criteria at the account level in the specified Region. The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of the criteria you set, the AMIs created by your account will always be discoverable and usable by users in your account. For more information, see Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs in Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#replace_image_criteria_in_allowed_images_settings"><CopyableCode code="replace_image_criteria_in_allowed_images_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ImageCriterion"><code>ImageCriterion</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Sets or replaces the criteria for Allowed AMIs. The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of the criteria you set, the AMIs created by your account will always be discoverable and usable by users in your account. For more information, see Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs in Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#disable_allowed_images_settings"><CopyableCode code="disable_allowed_images_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables Allowed AMIs for your account in the specified Amazon Web Services Region. When set to disabled, the image criteria in your Allowed AMIs settings do not apply, and no restrictions are placed on AMI discoverability or usage. Users in your account can launch instances using any public AMI or AMI shared with your account. The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of the criteria you set, the AMIs created by your account will always be discoverable and usable by users in your account. For more information, see Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs in Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#enable_allowed_images_settings"><CopyableCode code="enable_allowed_images_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AllowedImagesSettingsState"><code>AllowedImagesSettingsState</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables Allowed AMIs for your account in the specified Amazon Web Services Region. Two values are accepted: enabled: The image criteria in your Allowed AMIs settings are applied. As a result, only AMIs matching these criteria are discoverable and can be used by your account to launch instances. audit-mode: The image criteria in your Allowed AMIs settings are not applied. No restrictions are placed on AMI discoverability or usage. Users in your account can launch instances using any public AMI or AMI shared with your account. The purpose of audit-mode is to indicate which AMIs will be affected when Allowed AMIs is enabled. In audit-mode, each AMI displays either "ImageAllowed": true or "ImageAllowed": false to indicate whether the AMI will be discoverable and available to users in the account when Allowed AMIs is enabled. The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of the criteria you set, the AMIs created by your account will always be discoverable and usable by users in your account. For more information, see Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs in Amazon EC2 User Guide.</td>
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
<tr id="parameter-AllowedImagesSettingsState">
    <td><CopyableCode code="AllowedImagesSettingsState" /></td>
    <td><code>string</code></td>
    <td>Specify enabled to apply the image criteria specified by the Allowed AMIs settings. Specify audit-mode so that you can check which AMIs will be allowed or not allowed by the image criteria.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ImageCriterion">
    <td><CopyableCode code="ImageCriterion" /></td>
    <td><code>array</code></td>
    <td>The list of criteria that are evaluated to determine whether AMIs are discoverable and usable in the account in the specified Amazon Web Services Region.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_allowed_images_settings"
    values={[
        { label: 'get_allowed_images_settings', value: 'get_allowed_images_settings' }
    ]}
>
<TabItem value="get_allowed_images_settings">

Gets the current state of the Allowed AMIs setting and the list of Allowed AMIs criteria at the account level in the specified Region. The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of the criteria you set, the AMIs created by your account will always be discoverable and usable by users in your account. For more information, see Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs in Amazon EC2 User Guide.

```sql
SELECT
ImageCriteria,
ManagedBy,
State
FROM aws.ec2.allowed_images_settings
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_image_criteria_in_allowed_images_settings"
    values={[
        { label: 'replace_image_criteria_in_allowed_images_settings', value: 'replace_image_criteria_in_allowed_images_settings' }
    ]}
>
<TabItem value="replace_image_criteria_in_allowed_images_settings">

Sets or replaces the criteria for Allowed AMIs. The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of the criteria you set, the AMIs created by your account will always be discoverable and usable by users in your account. For more information, see Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs in Amazon EC2 User Guide.

```sql
REPLACE aws.ec2.allowed_images_settings
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND ImageCriterion = '{{ ImageCriterion}}'
AND DryRun = {{ DryRun}}
RETURNING
ReturnValue;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_allowed_images_settings"
    values={[
        { label: 'disable_allowed_images_settings', value: 'disable_allowed_images_settings' },
        { label: 'enable_allowed_images_settings', value: 'enable_allowed_images_settings' }
    ]}
>
<TabItem value="disable_allowed_images_settings">

Disables Allowed AMIs for your account in the specified Amazon Web Services Region. When set to disabled, the image criteria in your Allowed AMIs settings do not apply, and no restrictions are placed on AMI discoverability or usage. Users in your account can launch instances using any public AMI or AMI shared with your account. The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of the criteria you set, the AMIs created by your account will always be discoverable and usable by users in your account. For more information, see Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs in Amazon EC2 User Guide.

```sql
EXEC aws.ec2.allowed_images_settings.disable_allowed_images_settings 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_allowed_images_settings">

Enables Allowed AMIs for your account in the specified Amazon Web Services Region. Two values are accepted: enabled: The image criteria in your Allowed AMIs settings are applied. As a result, only AMIs matching these criteria are discoverable and can be used by your account to launch instances. audit-mode: The image criteria in your Allowed AMIs settings are not applied. No restrictions are placed on AMI discoverability or usage. Users in your account can launch instances using any public AMI or AMI shared with your account. The purpose of audit-mode is to indicate which AMIs will be affected when Allowed AMIs is enabled. In audit-mode, each AMI displays either "ImageAllowed": true or "ImageAllowed": false to indicate whether the AMI will be discoverable and available to users in the account when Allowed AMIs is enabled. The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of the criteria you set, the AMIs created by your account will always be discoverable and usable by users in your account. For more information, see Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs in Amazon EC2 User Guide.

```sql
EXEC aws.ec2.allowed_images_settings.enable_allowed_images_settings 
@AllowedImagesSettingsState='{{ AllowedImagesSettingsState }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
