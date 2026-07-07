--- 
title: collaboration_analysis_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - collaboration_analysis_templates
  - cleanrooms
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

Creates, updates, deletes, gets or lists a <code>collaboration_analysis_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaboration_analysis_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.collaboration_analysis_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_collaboration_analysis_template"
    values={[
        { label: 'batch_get_collaboration_analysis_template', value: 'batch_get_collaboration_analysis_template' },
        { label: 'get_collaboration_analysis_template', value: 'get_collaboration_analysis_template' },
        { label: 'list_collaboration_analysis_templates', value: 'list_collaboration_analysis_templates' }
    ]}
>
<TabItem value="batch_get_collaboration_analysis_template">

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
    <td><CopyableCode code="collaborationAnalysisTemplates" /></td>
    <td><code>array</code></td>
    <td>The retrieved list of analysis templates within a collaboration.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Error reasons for collaboration analysis templates that could not be retrieved. One error is returned for every collaboration analysis template that could not be retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_collaboration_analysis_template">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the analysis template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the analysis template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysisParameters" /></td>
    <td><code>array</code></td>
    <td>The analysis parameters that have been specified in the analysis template.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the analysis template. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/analysistemplate/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the analysis template’s associated collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the analysis template within a collaboration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the analysis template. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessageConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration that specifies the level of detail in error messages returned by analyses using this template. When set to DETAILED, error messages include more information to help troubleshoot issues with PySpark jobs. Detailed error messages may expose underlying data, including sensitive information. Recommended for faster troubleshooting in development and testing environments.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format of the analysis template in the collaboration. (SQL, PYSPARK_1_0)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>The entire schema object.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source of the analysis template within a collaboration.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceMetadata" /></td>
    <td><code>object</code></td>
    <td>The source metadata for the collaboration analysis template.</td>
</tr>
<tr>
    <td><CopyableCode code="syntheticDataParameters" /></td>
    <td><code>object</code></td>
    <td>The synthetic data generation parameters configured for this collaboration analysis template.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the analysis template in the collaboration was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validations" /></td>
    <td><code>array</code></td>
    <td>The validations that were performed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collaboration_analysis_templates">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the analysis template. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the analysis template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the analysis template. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/analysistemplate/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the analysis template’s associated collaboration. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the summary of the analysis template in a collaboration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the analysis template. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isSyntheticData" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this collaboration analysis template uses synthetic data generation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the summary of the analysis template in the collaboration was last updated.</td>
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
    <td><a href="#batch_get_collaboration_analysis_template"><CopyableCode code="batch_get_collaboration_analysis_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple analysis templates within a collaboration by their Amazon Resource Names (ARNs).</td>
</tr>
<tr>
    <td><a href="#get_collaboration_analysis_template"><CopyableCode code="get_collaboration_analysis_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-analysis_template_arn"><code>analysis_template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an analysis template within a collaboration.</td>
</tr>
<tr>
    <td><a href="#list_collaboration_analysis_templates"><CopyableCode code="list_collaboration_analysis_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists analysis templates within a collaboration.</td>
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
<tr id="parameter-analysis_template_arn">
    <td><CopyableCode code="analysis_template_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the analysis template within a collaboration.</td>
</tr>
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_collaboration_analysis_template"
    values={[
        { label: 'batch_get_collaboration_analysis_template', value: 'batch_get_collaboration_analysis_template' },
        { label: 'get_collaboration_analysis_template', value: 'get_collaboration_analysis_template' },
        { label: 'list_collaboration_analysis_templates', value: 'list_collaboration_analysis_templates' }
    ]}
>
<TabItem value="batch_get_collaboration_analysis_template">

Retrieves multiple analysis templates within a collaboration by their Amazon Resource Names (ARNs).

```sql
SELECT
collaborationAnalysisTemplates,
errors
FROM aws.cleanrooms.collaboration_analysis_templates
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_collaboration_analysis_template">

Retrieves an analysis template within a collaboration.

```sql
SELECT
id,
name,
analysisParameters,
arn,
collaborationArn,
collaborationId,
createTime,
creatorAccountId,
description,
errorMessageConfiguration,
format_,
schema,
source,
sourceMetadata,
syntheticDataParameters,
updateTime,
validations
FROM aws.cleanrooms.collaboration_analysis_templates
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND analysis_template_arn = '{{ analysis_template_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_collaboration_analysis_templates">

Lists analysis templates within a collaboration.

```sql
SELECT
id,
name,
arn,
collaborationArn,
collaborationId,
createTime,
creatorAccountId,
description,
isSyntheticData,
updateTime
FROM aws.cleanrooms.collaboration_analysis_templates
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
