--- 
title: account_customizations
hide_title: false
hide_table_of_contents: false
keywords:
  - account_customizations
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>account_customizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_customizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.account_customizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_customization"
    values={[
        { label: 'describe_account_customization', value: 'describe_account_customization' }
    ]}
>
<TabItem value="describe_account_customization">

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
    <td><CopyableCode code="AccountCustomization" /></td>
    <td><code>object</code></td>
    <td>The Quick Sight customizations associated with your Amazon Web Services account or a Quick Sight namespace in a specific Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customization that's associated with this Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="AwsAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services account that you're describing. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Namespace" /></td>
    <td><code>string</code></td>
    <td>The Quick Sight namespace that you're describing. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_account_customization"><CopyableCode code="describe_account_customization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-resolved"><code>resolved</code></a></td>
    <td>Describes the customizations associated with the provided Amazon Web Services account and Amazon Quick Sight namespace. The Quick Sight console evaluates which customizations to apply by running this API operation with the Resolved flag included. To determine what customizations display when you run this command, it can help to visualize the relationship of the entities involved. Amazon Web Services account - The Amazon Web Services account exists at the top of the hierarchy. It has the potential to use all of the Amazon Web Services Regions and Amazon Web Services Services. When you subscribe to Quick Sight, you choose one Amazon Web Services Region to use as your home Region. That's where your free SPICE capacity is located. You can use Quick Sight in any supported Amazon Web Services Region. Amazon Web Services Region - You can sign in to Quick Sight in any Amazon Web Services Region. If you have a user directory, it resides in us-east-1, which is US East (N. Virginia). Generally speaking, these users have access to Quick Sight in any Amazon Web Services Region, unless they are constrained to a namespace. To run the command in a different Amazon Web Services Region, you change your Region settings. If you're using the CLI, you can use one of the following options: Use command line options. Use named profiles. Run aws configure to change your default Amazon Web Services Region. Use Enter to key the same settings for your keys. For more information, see Configuring the CLI. Namespace - A Quick Sight namespace is a partition that contains users and assets (data sources, datasets, dashboards, and so on). To access assets that are in a specific namespace, users and groups must also be part of the same namespace. People who share a namespace are completely isolated from users and assets in other namespaces, even if they are in the same Amazon Web Services account and Amazon Web Services Region. Applied customizations - Quick Sight customizations can apply to an Amazon Web Services account or to a namespace. Settings that you apply to a namespace override settings that you apply to an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_account_customization"><CopyableCode code="create_account_customization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountCustomization"><code>AccountCustomization</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Creates Amazon Quick Sight customizations. Currently, you can add a custom default theme by using the CreateAccountCustomization or UpdateAccountCustomization API operation. To further customize Amazon Quick Sight by removing Amazon Quick Sight sample assets and videos for all new users, see Customizing Quick Sight in the Amazon Quick Sight User Guide. You can create customizations for your Amazon Web Services account or, if you specify a namespace, for a Quick Sight namespace instead. Customizations that apply to a namespace always override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation. Before you use the CreateAccountCustomization API operation to add a theme as the namespace default, make sure that you first share the theme with the namespace. If you don't share it with the namespace, the theme isn't visible to your users even if you make it the default theme. To check if the theme is shared, view the current permissions by using the DescribeThemePermissions API operation. To share the theme, grant permissions by using the UpdateThemePermissions API operation.</td>
</tr>
<tr>
    <td><a href="#update_account_customization"><CopyableCode code="update_account_customization" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountCustomization"><code>AccountCustomization</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Updates Amazon Quick Sight customizations. Currently, the only customization that you can use is a theme. You can use customizations for your Amazon Web Services account or, if you specify a namespace, for a Quick Sight namespace instead. Customizations that apply to a namespace override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation.</td>
</tr>
<tr>
    <td><a href="#delete_account_customization"><CopyableCode code="delete_account_customization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>This API permanently deletes all Quick Sight customizations for the specified Amazon Web Services account and namespace. When you delete account customizations: All customizations are removed including themes, branding, and visual settings This action cannot be undone through the API Users will see default Quick Sight styling after customizations are deleted Before proceeding: Ensure you have backups of any custom themes or branding elements you may want to recreate. Deletes all Amazon Quick Sight customizations for the specified Amazon Web Services account and Quick Sight namespace.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services account that you want to delete Quick Sight customizations from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Quick Sight namespace that you're deleting the customizations from.</td>
</tr>
<tr id="parameter-resolved">
    <td><CopyableCode code="resolved" /></td>
    <td><code>boolean</code></td>
    <td>The Resolved flag works with the other parameters to determine which view of Quick Sight customizations is returned. You can add this flag to your command to use the same view that Quick Sight uses to identify which customizations to apply to the console. Omit this flag, or set it to no-resolved, to reveal customizations that are configured at different levels.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_account_customization"
    values={[
        { label: 'describe_account_customization', value: 'describe_account_customization' }
    ]}
>
<TabItem value="describe_account_customization">

Describes the customizations associated with the provided Amazon Web Services account and Amazon Quick Sight namespace. The Quick Sight console evaluates which customizations to apply by running this API operation with the Resolved flag included. To determine what customizations display when you run this command, it can help to visualize the relationship of the entities involved. Amazon Web Services account - The Amazon Web Services account exists at the top of the hierarchy. It has the potential to use all of the Amazon Web Services Regions and Amazon Web Services Services. When you subscribe to Quick Sight, you choose one Amazon Web Services Region to use as your home Region. That's where your free SPICE capacity is located. You can use Quick Sight in any supported Amazon Web Services Region. Amazon Web Services Region - You can sign in to Quick Sight in any Amazon Web Services Region. If you have a user directory, it resides in us-east-1, which is US East (N. Virginia). Generally speaking, these users have access to Quick Sight in any Amazon Web Services Region, unless they are constrained to a namespace. To run the command in a different Amazon Web Services Region, you change your Region settings. If you're using the CLI, you can use one of the following options: Use command line options. Use named profiles. Run aws configure to change your default Amazon Web Services Region. Use Enter to key the same settings for your keys. For more information, see Configuring the CLI. Namespace - A Quick Sight namespace is a partition that contains users and assets (data sources, datasets, dashboards, and so on). To access assets that are in a specific namespace, users and groups must also be part of the same namespace. People who share a namespace are completely isolated from users and assets in other namespaces, even if they are in the same Amazon Web Services account and Amazon Web Services Region. Applied customizations - Quick Sight customizations can apply to an Amazon Web Services account or to a namespace. Settings that you apply to a namespace override settings that you apply to an Amazon Web Services account.

```sql
SELECT
AccountCustomization,
Arn,
AwsAccountId,
Namespace,
RequestId,
Status
FROM aws.quicksight.account_customizations
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND namespace = '{{ namespace }}'
AND resolved = '{{ resolved }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_account_customization"
    values={[
        { label: 'create_account_customization', value: 'create_account_customization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_account_customization">

Creates Amazon Quick Sight customizations. Currently, you can add a custom default theme by using the CreateAccountCustomization or UpdateAccountCustomization API operation. To further customize Amazon Quick Sight by removing Amazon Quick Sight sample assets and videos for all new users, see Customizing Quick Sight in the Amazon Quick Sight User Guide. You can create customizations for your Amazon Web Services account or, if you specify a namespace, for a Quick Sight namespace instead. Customizations that apply to a namespace always override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation. Before you use the CreateAccountCustomization API operation to add a theme as the namespace default, make sure that you first share the theme with the namespace. If you don't share it with the namespace, the theme isn't visible to your users even if you make it the default theme. To check if the theme is shared, view the current permissions by using the DescribeThemePermissions API operation. To share the theme, grant permissions by using the UpdateThemePermissions API operation.

```sql
INSERT INTO aws.quicksight.account_customizations (
AccountCustomization,
Tags,
aws_account_id,
region,
namespace
)
SELECT 
'{{ AccountCustomization }}' /* required */,
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ region }}',
'{{ namespace }}'
RETURNING
AccountCustomization,
Arn,
AwsAccountId,
Namespace,
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_customizations
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the account_customizations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the account_customizations resource.
    - name: AccountCustomization
      description: |
        The Quick Sight customizations associated with your Amazon Web Services account or a Quick Sight namespace in a specific Amazon Web Services Region.
      value:
        DefaultTheme: "{{ DefaultTheme }}"
        DefaultEmailCustomizationTemplate: "{{ DefaultEmailCustomizationTemplate }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: namespace
      value: "{{ namespace }}"
      description: The Quick Sight namespace that you want to add customizations to.
      description: The Quick Sight namespace that you want to add customizations to.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_customization"
    values={[
        { label: 'update_account_customization', value: 'update_account_customization' }
    ]}
>
<TabItem value="update_account_customization">

Updates Amazon Quick Sight customizations. Currently, the only customization that you can use is a theme. You can use customizations for your Amazon Web Services account or, if you specify a namespace, for a Quick Sight namespace instead. Customizations that apply to a namespace override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation.

```sql
UPDATE aws.quicksight.account_customizations
SET 
AccountCustomization = '{{ AccountCustomization }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND AccountCustomization = '{{ AccountCustomization }}' --required
AND namespace = '{{ namespace}}'
RETURNING
AccountCustomization,
Arn,
AwsAccountId,
Namespace,
RequestId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_customization"
    values={[
        { label: 'delete_account_customization', value: 'delete_account_customization' }
    ]}
>
<TabItem value="delete_account_customization">

This API permanently deletes all Quick Sight customizations for the specified Amazon Web Services account and namespace. When you delete account customizations: All customizations are removed including themes, branding, and visual settings This action cannot be undone through the API Users will see default Quick Sight styling after customizations are deleted Before proceeding: Ensure you have backups of any custom themes or branding elements you may want to recreate. Deletes all Amazon Quick Sight customizations for the specified Amazon Web Services account and Quick Sight namespace.

```sql
DELETE FROM aws.quicksight.account_customizations
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND namespace = '{{ namespace }}'
;
```
</TabItem>
</Tabs>
