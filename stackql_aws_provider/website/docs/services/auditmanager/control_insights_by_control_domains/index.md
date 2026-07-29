--- 
title: control_insights_by_control_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - control_insights_by_control_domains
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

Creates, updates, deletes, gets or lists a <code>control_insights_by_control_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="control_insights_by_control_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.control_insights_by_control_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_control_insights_by_control_domain"
    values={[
        { label: 'list_control_insights_by_control_domain', value: 'list_control_insights_by_control_domain' }
    ]}
>
<TabItem value="list_control_insights_by_control_domain">

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
    <td><CopyableCode code="control_insights_metadata" /></td>
    <td><code>array</code></td>
    <td>The control analytics data that the ListControlInsightsByControlDomain API returned.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
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
    <td><a href="#list_control_insights_by_control_domain"><CopyableCode code="list_control_insights_by_control_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-controlDomainId"><code>controlDomainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the latest analytics data for controls within a specific control domain across all active assessments. Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the lastUpdated date of controlInsightsMetadata. If neither of these conditions are met, no data is listed for that control.</td>
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
<tr id="parameter-controlDomainId">
    <td><CopyableCode code="controlDomainId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the control domain. Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see ListDomains in the Amazon Web Services Control Catalog API Reference.</td>
</tr>
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
    defaultValue="list_control_insights_by_control_domain"
    values={[
        { label: 'list_control_insights_by_control_domain', value: 'list_control_insights_by_control_domain' }
    ]}
>
<TabItem value="list_control_insights_by_control_domain">

Lists the latest analytics data for controls within a specific control domain across all active assessments. Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the lastUpdated date of controlInsightsMetadata. If neither of these conditions are met, no data is listed for that control.

```sql
SELECT
control_insights_metadata,
next_token
FROM aws.auditmanager.control_insights_by_control_domains
WHERE controlDomainId = '{{ controlDomainId }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
