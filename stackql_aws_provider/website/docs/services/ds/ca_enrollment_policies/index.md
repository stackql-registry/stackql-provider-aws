--- 
title: ca_enrollment_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - ca_enrollment_policies
  - ds
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

Creates, updates, deletes, gets or lists a <code>ca_enrollment_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ca_enrollment_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.ca_enrollment_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ca_enrollment_policy"
    values={[
        { label: 'describe_ca_enrollment_policy', value: 'describe_ca_enrollment_policy' }
    ]}
>
<TabItem value="describe_ca_enrollment_policy">

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
    <td><CopyableCode code="CaEnrollmentPolicyStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the CA enrollment policy. This indicates if automatic certificate enrollment is currently active, inactive, or in a transitional state. Valid values: IN_PROGRESS - The policy is being activated T SUCCESS - The policy is active and automatic certificate enrollment is operational FAILED - The policy activation or deactivation failed DISABLING - The policy is being deactivated DISABLED - The policy is inactive and automatic certificate enrollment is not available IMPAIRED - Network connectivity is impaired. (InProgress, Success, Failed, Disabling, Disabled, Impaired)</td>
</tr>
<tr>
    <td><CopyableCode code="CaEnrollmentPolicyStatusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information explaining the current status of the CA enrollment policy, particularly useful when the policy is in an error or transitional state.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the directory associated with this CA enrollment policy. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the CA enrollment policy was last modified or updated.</td>
</tr>
<tr>
    <td><CopyableCode code="PcaConnectorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services Private Certificate Authority (PCA) connector that is configured for automatic certificate enrollment in this directory. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_ca_enrollment_policy"><CopyableCode code="describe_ca_enrollment_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about the certificate authority (CA) enrollment policy for the specified directory. This policy determines how client certificates are automatically enrolled and managed through Amazon Web Services Private Certificate Authority.</td>
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
    defaultValue="describe_ca_enrollment_policy"
    values={[
        { label: 'describe_ca_enrollment_policy', value: 'describe_ca_enrollment_policy' }
    ]}
>
<TabItem value="describe_ca_enrollment_policy">

Retrieves detailed information about the certificate authority (CA) enrollment policy for the specified directory. This policy determines how client certificates are automatically enrolled and managed through Amazon Web Services Private Certificate Authority.

```sql
SELECT
CaEnrollmentPolicyStatus,
CaEnrollmentPolicyStatusReason,
DirectoryId,
LastUpdatedDateTime,
PcaConnectorArn
FROM aws.ds.ca_enrollment_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
