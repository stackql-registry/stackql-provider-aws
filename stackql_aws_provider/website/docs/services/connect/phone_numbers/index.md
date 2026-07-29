--- 
title: phone_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - phone_numbers
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

Creates, updates, deletes, gets or lists a <code>phone_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="phone_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.phone_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_phone_number"
    values={[
        { label: 'describe_phone_number', value: 'describe_phone_number' },
        { label: 'list_phone_numbers', value: 'list_phone_numbers' }
    ]}
>
<TabItem value="describe_phone_number">

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
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance that phone numbers are claimed to. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number" /></td>
    <td><code>string</code></td>
    <td>The phone number. Phone numbers are formatted &#91;+&#93; &#91;country code&#93; &#91;subscriber number including area code&#93;. (pattern: &lt;code&gt;\\+&#91;1-9&#93;\\d&#123;1,14&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_country_code" /></td>
    <td><code>string</code></td>
    <td>The ISO country code. (AF, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BA, BW, BR, IO, VG, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CK, CR, HR, CU, CW, CY, CZ, CD, DK, DJ, DM, DO, TL, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, PF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GU, GT, GG, GN, GW, GY, HT, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, CI, JM, JP, JE, JO, KZ, KE, KI, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, AN, NC, NZ, NI, NE, NG, NU, KP, MP, NO, OM, PK, PW, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, CG, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, KR, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TG, TK, TO, TT, TN, TR, TM, TC, TV, VI, UG, UA, AE, GB, US, UY, UZ, VU, VA, VE, VN, WF, EH, YE, ZM, ZW)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_description" /></td>
    <td><code>string</code></td>
    <td>The description of the phone number. (pattern: &lt;code&gt;^&#91;\W\S_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_status" /></td>
    <td><code>object</code></td>
    <td>The status of the phone number. CLAIMED means the previous ClaimPhoneNumber or UpdatePhoneNumber operation succeeded. IN_PROGRESS means a ClaimPhoneNumber, UpdatePhoneNumber, or UpdatePhoneNumberMetadata operation is still in progress and has not yet completed. You can call DescribePhoneNumber at a later time to verify if the previous operation has completed. FAILED indicates that the previous ClaimPhoneNumber or UpdatePhoneNumber operation has failed. It will include a message indicating the failure reason. A common reason for a failure may be that the TargetArn value you are claiming or updating a phone number to has reached its limit of total claimed numbers. If you received a FAILED status from a ClaimPhoneNumber API call, you have one day to retry claiming the phone number before the number is released back to the inventory for other customers to claim. You will not be billed for the phone number during the 1-day period if number claiming fails.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_type" /></td>
    <td><code>string</code></td>
    <td>The type of phone number. (TOLL_FREE, DID, UIFN, SHARED, THIRD_PARTY_TF, THIRD_PARTY_DID, SHORT_CODE)</td>
</tr>
<tr>
    <td><CopyableCode code="source_phone_number_arn" /></td>
    <td><code>string</code></td>
    <td>The claimed phone number ARN that was previously imported from the external service, such as Amazon Web Services End User Messaging. If it is from Amazon Web Services End User Messaging, it looks like the ARN of the phone number that was imported from Amazon Web Services End User Messaging.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="target_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_phone_numbers">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number" /></td>
    <td><code>string</code></td>
    <td>The phone number. (pattern: &lt;code&gt;\\+&#91;1-9&#93;\\d&#123;1,14&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_country_code" /></td>
    <td><code>string</code></td>
    <td>The ISO country code. (AF, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BA, BW, BR, IO, VG, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CK, CR, HR, CU, CW, CY, CZ, CD, DK, DJ, DM, DO, TL, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, PF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GU, GT, GG, GN, GW, GY, HT, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, CI, JM, JP, JE, JO, KZ, KE, KI, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, AN, NC, NZ, NI, NE, NG, NU, KP, MP, NO, OM, PK, PW, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, CG, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, KR, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TG, TK, TO, TT, TN, TR, TM, TC, TV, VI, UG, UA, AE, GB, US, UY, UZ, VU, VA, VE, VN, WF, EH, YE, ZM, ZW)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_type" /></td>
    <td><code>string</code></td>
    <td>The type of phone number. (TOLL_FREE, DID, UIFN, SHARED, THIRD_PARTY_TF, THIRD_PARTY_DID, SHORT_CODE)</td>
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
    <td><a href="#describe_phone_number"><CopyableCode code="describe_phone_number" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details and status of a phone number that’s claimed to your Amazon Connect instance or traffic distribution group. If the number is claimed to a traffic distribution group, and you are calling in the Amazon Web Services Region where the traffic distribution group was created, you can use either a phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you receive a ResourceNotFoundException.</td>
</tr>
<tr>
    <td><a href="#list_phone_numbers"><CopyableCode code="list_phone_numbers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-phoneNumberTypes"><code>phoneNumberTypes</code></a>, <a href="#parameter-phoneNumberCountryCodes"><code>phoneNumberCountryCodes</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides information about the phone numbers for the specified Amazon Connect instance. For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide. We recommend using ListPhoneNumbersV2 to return phone number types. ListPhoneNumbers doesn't support number types UIFN, SHARED, THIRD_PARTY_TF, and THIRD_PARTY_DID. While it returns numbers of those types, it incorrectly lists them as TOLL_FREE or DID. The phone number Arn value that is returned from each of the items in the PhoneNumberSummaryList cannot be used to tag phone number resources. It will fail with a ResourceNotFoundException. Instead, use the ListPhoneNumbersV2 API. It returns the new phone number ARN that can be used to tag phone number resources.</td>
</tr>
<tr>
    <td><a href="#release_phone_number"><CopyableCode code="release_phone_number" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You can call this API only in the Amazon Web Services Region where the number was claimed. To release phone numbers from a traffic distribution group, use the ReleasePhoneNumber API, not the Amazon Connect admin website. After releasing a phone number, the phone number enters into a cooldown period for up to 180 days. It cannot be searched for or claimed again until the period has ended. If you accidentally release a phone number, contact Amazon Web Services Support. If you plan to claim and release numbers frequently, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until up to 180 days past the oldest number released has expired. By default you can claim and release up to 200% of your maximum number of active phone numbers. If you claim and release phone numbers using the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming any more numbers until 180 days past the oldest number released has expired. For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 180 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services support ticket.</td>
</tr>
<tr>
    <td><a href="#update_phone_number"><CopyableCode code="update_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates your claimed phone number from its current Amazon Connect instance or traffic distribution group to another Amazon Connect instance or traffic distribution group in the same Amazon Web Services Region. After using this API, you must verify that the phone number is attached to the correct flow in the target instance or traffic distribution group. You need to do this because the API switches only the phone number to a new instance or traffic distribution group. It doesn't migrate the flow configuration of the phone number, too. You can call DescribePhoneNumber API to verify the status of a previous UpdatePhoneNumber operation.</td>
</tr>
<tr>
    <td><a href="#update_phone_number_metadata"><CopyableCode code="update_phone_number_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a phone number’s metadata. To verify the status of a previous UpdatePhoneNumberMetadata operation, call the DescribePhoneNumber API.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-phone_number_id">
    <td><CopyableCode code="phone_number_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or resource ID of the phone number.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-phoneNumberCountryCodes">
    <td><CopyableCode code="phoneNumberCountryCodes" /></td>
    <td><code>array</code></td>
    <td>The ISO country code.</td>
</tr>
<tr id="parameter-phoneNumberTypes">
    <td><CopyableCode code="phoneNumberTypes" /></td>
    <td><code>array</code></td>
    <td>The type of phone number. We recommend using ListPhoneNumbersV2 to return phone number types. While ListPhoneNumbers returns number types UIFN, SHARED, THIRD_PARTY_TF, and THIRD_PARTY_DID, it incorrectly lists them as TOLL_FREE or DID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_phone_number"
    values={[
        { label: 'describe_phone_number', value: 'describe_phone_number' },
        { label: 'list_phone_numbers', value: 'list_phone_numbers' }
    ]}
>
<TabItem value="describe_phone_number">

Gets details and status of a phone number that’s claimed to your Amazon Connect instance or traffic distribution group. If the number is claimed to a traffic distribution group, and you are calling in the Amazon Web Services Region where the traffic distribution group was created, you can use either a phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you receive a ResourceNotFoundException.

```sql
SELECT
instance_id,
phone_number,
phone_number_arn,
phone_number_country_code,
phone_number_description,
phone_number_id,
phone_number_status,
phone_number_type,
source_phone_number_arn,
tags,
target_arn
FROM aws.connect.phone_numbers
WHERE phone_number_id = '{{ phone_number_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_phone_numbers">

Provides information about the phone numbers for the specified Amazon Connect instance. For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide. We recommend using ListPhoneNumbersV2 to return phone number types. ListPhoneNumbers doesn't support number types UIFN, SHARED, THIRD_PARTY_TF, and THIRD_PARTY_DID. While it returns numbers of those types, it incorrectly lists them as TOLL_FREE or DID. The phone number Arn value that is returned from each of the items in the PhoneNumberSummaryList cannot be used to tag phone number resources. It will fail with a ResourceNotFoundException. Instead, use the ListPhoneNumbersV2 API. It returns the new phone number ARN that can be used to tag phone number resources.

```sql
SELECT
arn,
id,
phone_number,
phone_number_country_code,
phone_number_type
FROM aws.connect.phone_numbers
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND phoneNumberTypes = '{{ phoneNumberTypes }}'
AND phoneNumberCountryCodes = '{{ phoneNumberCountryCodes }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="release_phone_number"
    values={[
        { label: 'release_phone_number', value: 'release_phone_number' }
    ]}
>
<TabItem value="release_phone_number">

Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You can call this API only in the Amazon Web Services Region where the number was claimed. To release phone numbers from a traffic distribution group, use the ReleasePhoneNumber API, not the Amazon Connect admin website. After releasing a phone number, the phone number enters into a cooldown period for up to 180 days. It cannot be searched for or claimed again until the period has ended. If you accidentally release a phone number, contact Amazon Web Services Support. If you plan to claim and release numbers frequently, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until up to 180 days past the oldest number released has expired. By default you can claim and release up to 200% of your maximum number of active phone numbers. If you claim and release phone numbers using the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming any more numbers until 180 days past the oldest number released has expired. For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 180 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services support ticket.

```sql
UPDATE aws.connect.phone_numbers
SET 
-- No updatable properties
WHERE 
phone_number_id = '{{ phone_number_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken}}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_phone_number"
    values={[
        { label: 'update_phone_number', value: 'update_phone_number' },
        { label: 'update_phone_number_metadata', value: 'update_phone_number_metadata' }
    ]}
>
<TabItem value="update_phone_number">

Updates your claimed phone number from its current Amazon Connect instance or traffic distribution group to another Amazon Connect instance or traffic distribution group in the same Amazon Web Services Region. After using this API, you must verify that the phone number is attached to the correct flow in the target instance or traffic distribution group. You need to do this because the API switches only the phone number to a new instance or traffic distribution group. It doesn't migrate the flow configuration of the phone number, too. You can call DescribePhoneNumber API to verify the status of a previous UpdatePhoneNumber operation.

```sql
EXEC aws.connect.phone_numbers.update_phone_number 
@phone_number_id='{{ phone_number_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"TargetArn": "{{ TargetArn }}", 
"InstanceId": "{{ InstanceId }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="update_phone_number_metadata">

Updates a phone number’s metadata. To verify the status of a previous UpdatePhoneNumberMetadata operation, call the DescribePhoneNumber API.

```sql
EXEC aws.connect.phone_numbers.update_phone_number_metadata 
@phone_number_id='{{ phone_number_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"PhoneNumberDescription": "{{ PhoneNumberDescription }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
