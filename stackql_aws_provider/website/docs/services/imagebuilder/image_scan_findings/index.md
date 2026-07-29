--- 
title: image_scan_findings
hide_title: false
hide_table_of_contents: false
keywords:
  - image_scan_findings
  - imagebuilder
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

Creates, updates, deletes, gets or lists an <code>image_scan_findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_scan_findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.image_scan_findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_image_scan_findings"
    values={[
        { label: 'list_image_scan_findings', value: 'list_image_scan_findings' }
    ]}
>
<TabItem value="list_image_scan_findings">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that's associated with the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="first_observed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the finding was first observed.</td>
</tr>
<tr>
    <td><CopyableCode code="fix_available" /></td>
    <td><code>string</code></td>
    <td>Details about whether a fix is available for any of the packages that are identified in the finding through a version update.</td>
</tr>
<tr>
    <td><CopyableCode code="image_build_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image build version that's associated with the finding. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):image/&#91;a-z0-9-_&#93;+/&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+/&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image pipeline that's associated with the finding. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws):image-pipeline/&#91;a-z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inspector_score" /></td>
    <td><code>number (double)</code></td>
    <td>The score that Amazon Inspector assigned for the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="inspector_score_details" /></td>
    <td><code>object</code></td>
    <td>An object that contains details of the Amazon Inspector score.</td>
</tr>
<tr>
    <td><CopyableCode code="package_vulnerability_details" /></td>
    <td><code>object</code></td>
    <td>An object that contains the details of a package vulnerability finding.</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>object</code></td>
    <td>An object that contains the details about how to remediate the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the finding. Image Builder looks for findings of the type PACKAGE_VULNERABILITY that apply to output images, and excludes other types.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the finding was last updated.</td>
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
    <td><a href="#list_image_scan_findings"><CopyableCode code="list_image_scan_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of image scan findings for your account.</td>
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
    defaultValue="list_image_scan_findings"
    values={[
        { label: 'list_image_scan_findings', value: 'list_image_scan_findings' }
    ]}
>
<TabItem value="list_image_scan_findings">

Returns a list of image scan findings for your account.

```sql
SELECT
aws_account_id,
description,
first_observed_at,
fix_available,
image_build_version_arn,
image_pipeline_arn,
inspector_score,
inspector_score_details,
package_vulnerability_details,
remediation,
severity,
title_,
type_,
updated_at
FROM aws.imagebuilder.image_scan_findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
