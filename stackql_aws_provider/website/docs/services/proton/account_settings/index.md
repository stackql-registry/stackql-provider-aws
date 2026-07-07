--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - proton
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

Creates, updates, deletes, gets or lists an <code>account_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.account_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_settings"
    values={[
        { label: 'get_account_settings', value: 'get_account_settings' }
    ]}
>
<TabItem value="get_account_settings">

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
    <td><CopyableCode code="pipelineCodebuildRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service role that Proton uses for provisioning pipelines. Proton assumes this role for CodeBuild-based provisioning. (pattern: &lt;code&gt;(^$)|(^arn:(aws|aws-cn|aws-us-gov):iam::\d&#123;12&#125;:role/(&#91;\w+=,.@-&#93;&#123;1,512&#125;&#91;/:&#93;)*(&#91;\w+=,.@-&#93;&#123;1,64&#125;)$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineProvisioningRepository" /></td>
    <td><code>object</code></td>
    <td>The linked repository for pipeline provisioning. Required if you have environments configured for self-managed provisioning with services that include pipelines. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineServiceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by customer-owned automation for self-managed provisioning. (pattern: &lt;code&gt;(^$)|(^arn:(aws|aws-cn|aws-us-gov):iam::\d&#123;12&#125;:role/(&#91;\w+=,.@-&#93;&#123;1,512&#125;&#91;/:&#93;)*(&#91;\w+=,.@-&#93;&#123;1,64&#125;)$)&lt;/code&gt;)</td>
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
    <td><a href="#get_account_settings"><CopyableCode code="get_account_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detail data for Proton account-wide settings.</td>
</tr>
<tr>
    <td><a href="#update_account_settings"><CopyableCode code="update_account_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update Proton settings that are used for multiple services in the Amazon Web Services account.</td>
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
    defaultValue="get_account_settings"
    values={[
        { label: 'get_account_settings', value: 'get_account_settings' }
    ]}
>
<TabItem value="get_account_settings">

Get detail data for Proton account-wide settings.

```sql
SELECT
pipelineCodebuildRoleArn,
pipelineProvisioningRepository,
pipelineServiceRoleArn
FROM aws.proton.account_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_settings"
    values={[
        { label: 'update_account_settings', value: 'update_account_settings' }
    ]}
>
<TabItem value="update_account_settings">

Update Proton settings that are used for multiple services in the Amazon Web Services account.

```sql
UPDATE aws.proton.account_settings
SET 
deletePipelineProvisioningRepository = {{ deletePipelineProvisioningRepository }},
pipelineCodebuildRoleArn = '{{ pipelineCodebuildRoleArn }}',
pipelineProvisioningRepository = '{{ pipelineProvisioningRepository }}',
pipelineServiceRoleArn = '{{ pipelineServiceRoleArn }}'
WHERE 
region = '{{ region }}' --required
RETURNING
accountSettings;
```
</TabItem>
</Tabs>
