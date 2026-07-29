--- 
title: coverages
hide_title: false
hide_table_of_contents: false
keywords:
  - coverages
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>coverages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="coverages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.coverages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_coverage"
    values={[
        { label: 'list_coverage', value: 'list_coverage' }
    ]}
>
<TabItem value="list_coverage">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the covered resource. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_scanned_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was last checked for vulnerabilities.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the covered resource. (pattern: &lt;code&gt;.*(^arn:.*:ecr:.*:\d&#123;12&#125;:repository\/(?:&#91;a-z0-9&#93;+(?:&#91;._-&#93;&#91;a-z0-9&#93;+)*\/)*&#91;a-z0-9&#93;+(?:&#91;._-&#93;&#91;a-z0-9&#93;+)*(\/sha256:&#91;a-z0-9&#93;&#123;64&#125;)?$)|(^i-(&#91;a-z0-9&#93;&#123;8&#125;|&#91;a-z0-9&#93;&#123;17&#125;|\\*)$|(^arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_\.&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?$)|(^arn:(aws&#91;a-zA-Z-&#93;*)?:inspector2:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:codesecurity-integration\/&#91;a-f0-9-&#93;&#123;36&#125;\/project-&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$)).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_metadata" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about the metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the covered resource. (AWS_EC2_INSTANCE, AWS_ECR_CONTAINER_IMAGE, AWS_ECR_REPOSITORY, AWS_LAMBDA_FUNCTION, CODE_REPOSITORY)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_mode" /></td>
    <td><code>string</code></td>
    <td>The scan method that is applied to the instance. (EC2_SSM_AGENT_BASED, EC2_AGENTLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_status" /></td>
    <td><code>object</code></td>
    <td>The status of the scan covering the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_type" /></td>
    <td><code>string</code></td>
    <td>The Amazon Inspector scan type covering the resource. (NETWORK, PACKAGE, CODE)</td>
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
    <td><a href="#list_coverage"><CopyableCode code="list_coverage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists coverage details for your environment.</td>
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
    defaultValue="list_coverage"
    values={[
        { label: 'list_coverage', value: 'list_coverage' }
    ]}
>
<TabItem value="list_coverage">

Lists coverage details for your environment.

```sql
SELECT
account_id,
last_scanned_at,
resource_id,
resource_metadata,
resource_type,
scan_mode,
scan_status,
scan_type
FROM aws.inspector2.coverages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
