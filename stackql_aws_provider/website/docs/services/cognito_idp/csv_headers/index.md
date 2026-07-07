--- 
title: csv_headers
hide_title: false
hide_table_of_contents: false
keywords:
  - csv_headers
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>csv_headers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="csv_headers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.csv_headers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_csv_header"
    values={[
        { label: 'get_csv_header', value: 'get_csv_header' }
    ]}
>
<TabItem value="get_csv_header">

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
    <td><CopyableCode code="CSVHeader" /></td>
    <td><code>array</code></td>
    <td>A comma-separated list of attributes from your user pool. Save this output to a .csv file and populate it with the attributes of the users that you want to import.</td>
</tr>
<tr>
    <td><CopyableCode code="UserPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the requested user pool. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_csv_header"><CopyableCode code="get_csv_header" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID, generates a comma-separated value (CSV) list populated with available user attributes in the user pool. This list is the header for the CSV file that determines the users in a user import job. Save the content of CSVHeader in the response as a .csv file and populate it with the usernames and attributes of users that you want to import. For more information about CSV user import, see Importing users from a CSV file. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="get_csv_header"
    values={[
        { label: 'get_csv_header', value: 'get_csv_header' }
    ]}
>
<TabItem value="get_csv_header">

Given a user pool ID, generates a comma-separated value (CSV) list populated with available user attributes in the user pool. This list is the header for the CSV file that determines the users in a user import job. Save the content of CSVHeader in the response as a .csv file and populate it with the usernames and attributes of users that you want to import. For more information about CSV user import, see Importing users from a CSV file. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
CSVHeader,
UserPoolId
FROM aws.cognito_idp.csv_headers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
