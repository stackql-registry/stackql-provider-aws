--- 
title: control_domain_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - control_domain_insights
  - auditmanager
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

Creates, updates, deletes, gets or lists a <code>control_domain_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="control_domain_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.control_domain_insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_control_domain_insights"
    values={[
        { label: 'list_control_domain_insights', value: 'list_control_domain_insights' }
    ]}
>
<TabItem value="list_control_domain_insights">

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
    <td><CopyableCode code="controlDomainInsights" /></td>
    <td><code>array</code></td>
    <td>The control domain analytics data that the ListControlDomainInsights API returned.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results. (pattern: &lt;code&gt;^&#91;A-Za-z0-9+\/=&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#list_control_domain_insights"><CopyableCode code="list_control_domain_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the latest analytics data for control domains across all of your active assessments. Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see ListDomains in the Amazon Web Services Control Catalog API Reference. A control domain is listed only if at least one of the controls within that domain collected evidence on the lastUpdated date of controlDomainInsights. If this condition isn’t met, no data is listed for that control domain.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Represents the maximum number of results on a page or for an API request call.</td>
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
    defaultValue="list_control_domain_insights"
    values={[
        { label: 'list_control_domain_insights', value: 'list_control_domain_insights' }
    ]}
>
<TabItem value="list_control_domain_insights">

Lists the latest analytics data for control domains across all of your active assessments. Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see ListDomains in the Amazon Web Services Control Catalog API Reference. A control domain is listed only if at least one of the controls within that domain collected evidence on the lastUpdated date of controlDomainInsights. If this condition isn’t met, no data is listed for that control domain.

```sql
SELECT
controlDomainInsights,
nextToken
FROM aws.auditmanager.control_domain_insights
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
