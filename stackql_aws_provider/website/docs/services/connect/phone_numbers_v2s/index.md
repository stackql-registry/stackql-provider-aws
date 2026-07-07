--- 
title: phone_numbers_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - phone_numbers_v2s
  - connect
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

Creates, updates, deletes, gets or lists a <code>phone_numbers_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="phone_numbers_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.phone_numbers_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_phone_numbers_v2"
    values={[
        { label: 'list_phone_numbers_v2', value: 'list_phone_numbers_v2' }
    ]}
>
<TabItem value="list_phone_numbers_v2">

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
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance that phone numbers are claimed to. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumber" /></td>
    <td><code>string</code></td>
    <td>The phone number. Phone numbers are formatted &#91;+&#93; &#91;country code&#93; &#91;subscriber number including area code&#93;. (pattern: &lt;code&gt;\\+&#91;1-9&#93;\\d&#123;1,14&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberCountryCode" /></td>
    <td><code>string</code></td>
    <td>The ISO country code. (AF, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BA, BW, BR, IO, VG, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CK, CR, HR, CU, CW, CY, CZ, CD, DK, DJ, DM, DO, TL, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, PF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GU, GT, GG, GN, GW, GY, HT, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, CI, JM, JP, JE, JO, KZ, KE, KI, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, AN, NC, NZ, NI, NE, NG, NU, KP, MP, NO, OM, PK, PW, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, CG, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, KR, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TG, TK, TO, TT, TN, TR, TM, TC, TV, VI, UG, UA, AE, GB, US, UY, UZ, VU, VA, VE, VN, WF, EH, YE, ZM, ZW)</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the phone number. (pattern: &lt;code&gt;^&#91;\W\S_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberType" /></td>
    <td><code>string</code></td>
    <td>The type of phone number. (TOLL_FREE, DID, UIFN, SHARED, THIRD_PARTY_TF, THIRD_PARTY_DID, SHORT_CODE)</td>
</tr>
<tr>
    <td><CopyableCode code="SourcePhoneNumberArn" /></td>
    <td><code>string</code></td>
    <td>The claimed phone number ARN that was previously imported from the external service, such as Amazon Web Services End User Messaging. If it is from Amazon Web Services End User Messaging, it looks like the ARN of the phone number that was imported from Amazon Web Services End User Messaging.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through.</td>
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
    <td><a href="#list_phone_numbers_v2"><CopyableCode code="list_phone_numbers_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists phone numbers claimed to your Amazon Connect instance or traffic distribution group. If the provided TargetArn is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with traffic distribution group. For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide. When given an instance ARN, ListPhoneNumbersV2 returns only the phone numbers claimed to the instance. When given a traffic distribution group ARN ListPhoneNumbersV2 returns only the phone numbers claimed to the traffic distribution group.</td>
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
    defaultValue="list_phone_numbers_v2"
    values={[
        { label: 'list_phone_numbers_v2', value: 'list_phone_numbers_v2' }
    ]}
>
<TabItem value="list_phone_numbers_v2">

Lists phone numbers claimed to your Amazon Connect instance or traffic distribution group. If the provided TargetArn is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with traffic distribution group. For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide. When given an instance ARN, ListPhoneNumbersV2 returns only the phone numbers claimed to the instance. When given a traffic distribution group ARN ListPhoneNumbersV2 returns only the phone numbers claimed to the traffic distribution group.

```sql
SELECT
InstanceId,
PhoneNumber,
PhoneNumberArn,
PhoneNumberCountryCode,
PhoneNumberDescription,
PhoneNumberId,
PhoneNumberType,
SourcePhoneNumberArn,
TargetArn
FROM aws.connect.phone_numbers_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
