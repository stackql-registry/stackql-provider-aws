--- 
title: default_patch_baselines
hide_title: false
hide_table_of_contents: false
keywords:
  - default_patch_baselines
  - ssm
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

Creates, updates, deletes, gets or lists a <code>default_patch_baselines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_patch_baselines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.default_patch_baselines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_patch_baseline"
    values={[
        { label: 'get_default_patch_baseline', value: 'get_default_patch_baseline' }
    ]}
>
<TabItem value="get_default_patch_baseline">

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
    <td><CopyableCode code="BaselineId" /></td>
    <td><code>string</code></td>
    <td>The ID of the default patch baseline. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-:/&#93;&#123;20,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingSystem" /></td>
    <td><code>string</code></td>
    <td>The operating system for the returned patch baseline. (WINDOWS, AMAZON_LINUX, AMAZON_LINUX_2, AMAZON_LINUX_2022, UBUNTU, REDHAT_ENTERPRISE_LINUX, SUSE, CENTOS, ORACLE_LINUX, DEBIAN, MACOS, RASPBIAN, ROCKY_LINUX, ALMA_LINUX, AMAZON_LINUX_2023)</td>
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
    <td><a href="#get_default_patch_baseline"><CopyableCode code="get_default_patch_baseline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system. If you don't specify an operating system value, the default patch baseline for Windows is returned.</td>
</tr>
<tr>
    <td><a href="#register_default_patch_baseline"><CopyableCode code="register_default_patch_baseline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BaselineId"><code>BaselineId</code></a></td>
    <td></td>
    <td>Defines the default patch baseline for the relevant operating system. To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed instead of pb-0574b43a65ea646ed.</td>
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
    defaultValue="get_default_patch_baseline"
    values={[
        { label: 'get_default_patch_baseline', value: 'get_default_patch_baseline' }
    ]}
>
<TabItem value="get_default_patch_baseline">

Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system. If you don't specify an operating system value, the default patch baseline for Windows is returned.

```sql
SELECT
BaselineId,
OperatingSystem
FROM aws.ssm.default_patch_baselines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_default_patch_baseline"
    values={[
        { label: 'register_default_patch_baseline', value: 'register_default_patch_baseline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_default_patch_baseline">

Defines the default patch baseline for the relevant operating system. To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed instead of pb-0574b43a65ea646ed.

```sql
INSERT INTO aws.ssm.default_patch_baselines (
BaselineId,
region
)
SELECT 
'{{ BaselineId }}' /* required */,
'{{ region }}'
RETURNING
BaselineId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: default_patch_baselines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the default_patch_baselines resource.
    - name: BaselineId
      value: "{{ BaselineId }}"
      description: |
        The ID of the patch baseline that should be the default patch baseline.
`}</CodeBlock>

</TabItem>
</Tabs>
