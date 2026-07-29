--- 
title: available_patches
hide_title: false
hide_table_of_contents: false
keywords:
  - available_patches
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

Creates, updates, deletes, gets or lists an <code>available_patches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="available_patches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.available_patches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_available_patches"
    values={[
        { label: 'describe_available_patches', value: 'describe_available_patches' }
    ]}
>
<TabItem value="describe_available_patches">

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
    <td><CopyableCode code="advisory_ids" /></td>
    <td><code>array</code></td>
    <td>The Advisory ID of the patch. For example, RHSA-2020:3779. Applies to Linux-based managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="arch" /></td>
    <td><code>string</code></td>
    <td>The architecture of the patch. For example, in example-pkg-0.710.10-2.7.abcd.x86_64, the architecture is indicated by x86_64. Applies to Linux-based managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="bugzilla_ids" /></td>
    <td><code>array</code></td>
    <td>The Bugzilla ID of the patch. For example, 1600646. Applies to Linux-based managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="cve_ids" /></td>
    <td><code>array</code></td>
    <td>The Common Vulnerabilities and Exposures (CVE) ID of the patch. For example, CVE-2011-3192. Applies to Linux-based managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="classification" /></td>
    <td><code>string</code></td>
    <td>The classification of the patch. For example, SecurityUpdates, Updates, or CriticalUpdates.</td>
</tr>
<tr>
    <td><CopyableCode code="content_url" /></td>
    <td><code>string</code></td>
    <td>The URL where more information can be obtained about the patch.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the patch.</td>
</tr>
<tr>
    <td><CopyableCode code="epoch" /></td>
    <td><code>integer</code></td>
    <td>The epoch of the patch. For example in pkg-example-EE-20180914-2.2.amzn1.noarch, the epoch value is 20180914-2. Applies to Linux-based managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the patch. Applies to Windows patches only. This ID isn't the same as the Microsoft Knowledge Base ID.</td>
</tr>
<tr>
    <td><CopyableCode code="kb_number" /></td>
    <td><code>string</code></td>
    <td>The Microsoft Knowledge Base ID of the patch. Applies to Windows patches only.</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language of the patch if it's language-specific.</td>
</tr>
<tr>
    <td><CopyableCode code="msrc_number" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Security Response Center (MSRC) bulletin the patch is related to. For example, MS14-045. Applies to Windows patches only.</td>
</tr>
<tr>
    <td><CopyableCode code="msrc_severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the patch, such as Critical, Important, or Moderate. Applies to Windows patches only.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the patch. Applies to Linux-based managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>The specific product the patch is applicable for. For example, WindowsServer2016 or AmazonLinux2018.03.</td>
</tr>
<tr>
    <td><CopyableCode code="product_family" /></td>
    <td><code>string</code></td>
    <td>The product family the patch is applicable for. For example, Windows or Amazon Linux 2.</td>
</tr>
<tr>
    <td><CopyableCode code="release" /></td>
    <td><code>string</code></td>
    <td>The particular release of a patch. For example, in pkg-example-EE-20180914-2.2.amzn1.noarch, the release is 2.amaz1. Applies to Linux-based managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="release_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the patch was released.</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The source patch repository for the operating system and version, such as trusty-security for Ubuntu Server 14.04 LTE and focal-security for Ubuntu Server 20.04 LTE. Applies to Linux-based managed nodes only.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity level of the patch. For example, CRITICAL or MODERATE.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the patch.</td>
</tr>
<tr>
    <td><CopyableCode code="vendor" /></td>
    <td><code>string</code></td>
    <td>The name of the vendor providing the patch.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version number of the patch. For example, in example-pkg-1.710.10-2.7.abcd.x86_64, the version number is indicated by -1. Applies to Linux-based managed nodes only.</td>
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
    <td><a href="#describe_available_patches"><CopyableCode code="describe_available_patches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all patches eligible to be included in a patch baseline. Currently, DescribeAvailablePatches supports only the Amazon Linux 1, Amazon Linux 2, and Windows Server operating systems.</td>
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
    defaultValue="describe_available_patches"
    values={[
        { label: 'describe_available_patches', value: 'describe_available_patches' }
    ]}
>
<TabItem value="describe_available_patches">

Lists all patches eligible to be included in a patch baseline. Currently, DescribeAvailablePatches supports only the Amazon Linux 1, Amazon Linux 2, and Windows Server operating systems.

```sql
SELECT
advisory_ids,
arch,
bugzilla_ids,
cve_ids,
classification,
content_url,
description,
epoch,
id,
kb_number,
language,
msrc_number,
msrc_severity,
name,
product,
product_family,
release,
release_date,
repository,
severity,
title,
vendor,
version
FROM aws.ssm.available_patches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
