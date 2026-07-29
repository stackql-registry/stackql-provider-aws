--- 
title: account_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - account_attributes
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>account_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.account_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_attributes"
    values={[
        { label: 'describe_account_attributes', value: 'describe_account_attributes' }
    ]}
>
<TabItem value="describe_account_attributes">

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
    <td><CopyableCode code="application_quota" /></td>
    <td><code>string</code></td>
    <td>The quota for applications in the AWS account.</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_quota" /></td>
    <td><code>string</code></td>
    <td>The quota for application versions in the AWS account.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_template_quota" /></td>
    <td><code>string</code></td>
    <td>The quota for configuration templates in the AWS account.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_platform_quota" /></td>
    <td><code>string</code></td>
    <td>The quota for custom platforms in the AWS account.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_quota" /></td>
    <td><code>string</code></td>
    <td>The quota for environments in the AWS account.</td>
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
    <td><a href="#describe_account_attributes"><CopyableCode code="describe_account_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account. The result currently has one set of attributes—resource quotas.</td>
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
    defaultValue="describe_account_attributes"
    values={[
        { label: 'describe_account_attributes', value: 'describe_account_attributes' }
    ]}
>
<TabItem value="describe_account_attributes">

Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account. The result currently has one set of attributes—resource quotas.

```sql
SELECT
application_quota,
application_version_quota,
configuration_template_quota,
custom_platform_quota,
environment_quota
FROM aws.elasticbeanstalk.account_attributes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
