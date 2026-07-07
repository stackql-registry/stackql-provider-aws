--- 
title: what_if_analyses
hide_title: false
hide_table_of_contents: false
keywords:
  - what_if_analyses
  - forecast
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

Creates, updates, deletes, gets or lists a <code>what_if_analyses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="what_if_analyses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.what_if_analyses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_what_if_analyses"
    values={[
        { label: 'list_what_if_analyses', value: 'list_what_if_analyses' }
    ]}
>
<TabItem value="list_what_if_analyses">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the what-if analysis was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ForecastArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the baseline forecast that is being used in this what-if analysis. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the what-if analysis. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if analysis must be ACTIVE before you can access the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfAnalysisArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the what-if analysis. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WhatIfAnalysisName" /></td>
    <td><code>string</code></td>
    <td>The name of the what-if analysis. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_what_if_analyses"><CopyableCode code="list_what_if_analyses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the DescribeWhatIfAnalysis operation.</td>
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
    defaultValue="list_what_if_analyses"
    values={[
        { label: 'list_what_if_analyses', value: 'list_what_if_analyses' }
    ]}
>
<TabItem value="list_what_if_analyses">

Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the DescribeWhatIfAnalysis operation.

```sql
SELECT
CreationTime,
ForecastArn,
LastModificationTime,
Message,
Status,
WhatIfAnalysisArn,
WhatIfAnalysisName
FROM aws.forecast.what_if_analyses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
